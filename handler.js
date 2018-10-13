const { prisma } = require('./generated/prisma')
const { GraphQLServerLambda } = require('graphql-yoga')
const { createCustomer } = require('alda-saltedge')

const resolvers = {
  Query: {
    getUser(root, args, ctx) {
      return ctx.prisma.user({ psid: args.psid })
    },
  },
  Mutation: {
    createUser(root, args, ctx) {
      return ctx.prisma.createUser({ psid: args.psid })
    },
    createSaltedgeCustomer(root, args, ctx) {
      return ctx.prisma.user({ psid: args.psid })
        .then(({ id }) => {
           return createCustomer(id)
        }).then(({ id }) => {
          return ctx.prisma.createSaltedgeCustomer({
            customerId: id,
            user: { connect: { psid: args.psid }}
          })
      })
    }
  },
}

const lambda = new GraphQLServerLambda({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  }
})

exports.server = lambda.graphqlHandler
exports.playground = lambda.playgroundHandler
