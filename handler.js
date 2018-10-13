const { prisma } = require('./generated/prisma')
const { GraphQLServerLambda } = require('graphql-yoga')


const resolvers = {
  Query: {
    getUser(root, args, ctx) {
      return ctx.prisma.user({ psid: args.psid })
    },
  },
  Mutation: {
    createUser(root, args, context) {
      return context.prisma.createUser({ psid: args.psid })
    },
    createSaltedgeCustomer(root, args, ctx) {
      return ctx.prisma.createSaltedgeCustomer({
        user: { connect: { id: "cjn7d5zk20gea0710wudvg4bk" }}
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
