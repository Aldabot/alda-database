"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: `http://alda-Publi-17CXV49G8PHKF-15479292.eu-west-1.elb.amazonaws.com`
});
exports.prisma = new exports.Prisma();
