const { prisma } = require('./generated/prisma')
const { GraphQLServerLambda } = require('graphql-yoga')
const { createCustomer, createLogin, getLoginStatus } = require('alda-saltedge')
const SDL = require('./SDL')

const resolvers = {
  Query: {
    getUser(root, args, ctx) {
      return ctx.prisma.user({ psid: args.psid })
    },
    getSaltedgeLoginStatus: async (root, args, ctx) => {
      const status = await getLoginStatus(args.loginId)
      console.log(status)
      return status
    },
    hasValidSaltedgeLogin: async (root, args, ctx) => {
      const logins = await ctx.prisma.user({ psid: args.psid }).saltedgeCustomer().logins()
      return logins && logins.length > 0
    }
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
    },
    createSaltedgeLogin(root, args, ctx) {
      let customerId_ = null

      return ctx.prisma.user({ psid: args.psid }).saltedgeCustomer()
        .then(({ customerId }) => {
          customerId_ = customerId
          return createLogin(customerId, args.username, args.password, args.provider)
        }).then(({ id, ...rest }) => {
          return ctx.prisma.createSaltedgeLogin({
            loginId: id,
            provider: args.provider,
            saltedgeCustomer: { connect: { customerId: customerId_ }}
          })
        }).catch(err => console.error(err))
    }
  },
}

const lambda = new GraphQLServerLambda({
  typeDefs: SDL,
  resolvers,
  context: {
    prisma
  }
})

exports.SDL = SDL
exports.resolvers = resolvers

exports.server = lambda.graphqlHandler
