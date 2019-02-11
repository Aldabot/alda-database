"use strict";
require('dotenv').config()
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "SaltedgeAccount",
    embedded: false
  },
  {
    name: "SaltedgeCustomer",
    embedded: false
  },
  {
    name: "SaltedgeLogin",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: process.env.PRISMA_ENDPOINT
});
exports.prisma = new exports.Prisma();
