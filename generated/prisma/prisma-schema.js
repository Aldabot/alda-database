module.exports = {
        typeDefs: /* GraphQL */ `type AggregateSaltedgeAccount {
  count: Int!
}

type AggregateSaltedgeCustomer {
  count: Int!
}

type AggregateSaltedgeLogin {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createSaltedgeAccount(data: SaltedgeAccountCreateInput!): SaltedgeAccount!
  updateSaltedgeAccount(data: SaltedgeAccountUpdateInput!, where: SaltedgeAccountWhereUniqueInput!): SaltedgeAccount
  updateManySaltedgeAccounts(data: SaltedgeAccountUpdateManyMutationInput!, where: SaltedgeAccountWhereInput): BatchPayload!
  upsertSaltedgeAccount(where: SaltedgeAccountWhereUniqueInput!, create: SaltedgeAccountCreateInput!, update: SaltedgeAccountUpdateInput!): SaltedgeAccount!
  deleteSaltedgeAccount(where: SaltedgeAccountWhereUniqueInput!): SaltedgeAccount
  deleteManySaltedgeAccounts(where: SaltedgeAccountWhereInput): BatchPayload!
  createSaltedgeCustomer(data: SaltedgeCustomerCreateInput!): SaltedgeCustomer!
  updateSaltedgeCustomer(data: SaltedgeCustomerUpdateInput!, where: SaltedgeCustomerWhereUniqueInput!): SaltedgeCustomer
  updateManySaltedgeCustomers(data: SaltedgeCustomerUpdateManyMutationInput!, where: SaltedgeCustomerWhereInput): BatchPayload!
  upsertSaltedgeCustomer(where: SaltedgeCustomerWhereUniqueInput!, create: SaltedgeCustomerCreateInput!, update: SaltedgeCustomerUpdateInput!): SaltedgeCustomer!
  deleteSaltedgeCustomer(where: SaltedgeCustomerWhereUniqueInput!): SaltedgeCustomer
  deleteManySaltedgeCustomers(where: SaltedgeCustomerWhereInput): BatchPayload!
  createSaltedgeLogin(data: SaltedgeLoginCreateInput!): SaltedgeLogin!
  updateSaltedgeLogin(data: SaltedgeLoginUpdateInput!, where: SaltedgeLoginWhereUniqueInput!): SaltedgeLogin
  updateManySaltedgeLogins(data: SaltedgeLoginUpdateManyMutationInput!, where: SaltedgeLoginWhereInput): BatchPayload!
  upsertSaltedgeLogin(where: SaltedgeLoginWhereUniqueInput!, create: SaltedgeLoginCreateInput!, update: SaltedgeLoginUpdateInput!): SaltedgeLogin!
  deleteSaltedgeLogin(where: SaltedgeLoginWhereUniqueInput!): SaltedgeLogin
  deleteManySaltedgeLogins(where: SaltedgeLoginWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  saltedgeAccount(where: SaltedgeAccountWhereUniqueInput!): SaltedgeAccount
  saltedgeAccounts(where: SaltedgeAccountWhereInput, orderBy: SaltedgeAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SaltedgeAccount]!
  saltedgeAccountsConnection(where: SaltedgeAccountWhereInput, orderBy: SaltedgeAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SaltedgeAccountConnection!
  saltedgeCustomer(where: SaltedgeCustomerWhereUniqueInput!): SaltedgeCustomer
  saltedgeCustomers(where: SaltedgeCustomerWhereInput, orderBy: SaltedgeCustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SaltedgeCustomer]!
  saltedgeCustomersConnection(where: SaltedgeCustomerWhereInput, orderBy: SaltedgeCustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SaltedgeCustomerConnection!
  saltedgeLogin(where: SaltedgeLoginWhereUniqueInput!): SaltedgeLogin
  saltedgeLogins(where: SaltedgeLoginWhereInput, orderBy: SaltedgeLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SaltedgeLogin]!
  saltedgeLoginsConnection(where: SaltedgeLoginWhereInput, orderBy: SaltedgeLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SaltedgeLoginConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type SaltedgeAccount {
  id: ID!
  accountId: String!
  balance: Float
}

type SaltedgeAccountConnection {
  pageInfo: PageInfo!
  edges: [SaltedgeAccountEdge]!
  aggregate: AggregateSaltedgeAccount!
}

input SaltedgeAccountCreateInput {
  accountId: String!
  balance: Float
}

input SaltedgeAccountCreateManyInput {
  create: [SaltedgeAccountCreateInput!]
  connect: [SaltedgeAccountWhereUniqueInput!]
}

type SaltedgeAccountEdge {
  node: SaltedgeAccount!
  cursor: String!
}

enum SaltedgeAccountOrderByInput {
  id_ASC
  id_DESC
  accountId_ASC
  accountId_DESC
  balance_ASC
  balance_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SaltedgeAccountPreviousValues {
  id: ID!
  accountId: String!
  balance: Float
}

input SaltedgeAccountScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  accountId: String
  accountId_not: String
  accountId_in: [String!]
  accountId_not_in: [String!]
  accountId_lt: String
  accountId_lte: String
  accountId_gt: String
  accountId_gte: String
  accountId_contains: String
  accountId_not_contains: String
  accountId_starts_with: String
  accountId_not_starts_with: String
  accountId_ends_with: String
  accountId_not_ends_with: String
  balance: Float
  balance_not: Float
  balance_in: [Float!]
  balance_not_in: [Float!]
  balance_lt: Float
  balance_lte: Float
  balance_gt: Float
  balance_gte: Float
  AND: [SaltedgeAccountScalarWhereInput!]
  OR: [SaltedgeAccountScalarWhereInput!]
  NOT: [SaltedgeAccountScalarWhereInput!]
}

type SaltedgeAccountSubscriptionPayload {
  mutation: MutationType!
  node: SaltedgeAccount
  updatedFields: [String!]
  previousValues: SaltedgeAccountPreviousValues
}

input SaltedgeAccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SaltedgeAccountWhereInput
  AND: [SaltedgeAccountSubscriptionWhereInput!]
  OR: [SaltedgeAccountSubscriptionWhereInput!]
  NOT: [SaltedgeAccountSubscriptionWhereInput!]
}

input SaltedgeAccountUpdateDataInput {
  accountId: String
  balance: Float
}

input SaltedgeAccountUpdateInput {
  accountId: String
  balance: Float
}

input SaltedgeAccountUpdateManyDataInput {
  accountId: String
  balance: Float
}

input SaltedgeAccountUpdateManyInput {
  create: [SaltedgeAccountCreateInput!]
  update: [SaltedgeAccountUpdateWithWhereUniqueNestedInput!]
  upsert: [SaltedgeAccountUpsertWithWhereUniqueNestedInput!]
  delete: [SaltedgeAccountWhereUniqueInput!]
  connect: [SaltedgeAccountWhereUniqueInput!]
  set: [SaltedgeAccountWhereUniqueInput!]
  disconnect: [SaltedgeAccountWhereUniqueInput!]
  deleteMany: [SaltedgeAccountScalarWhereInput!]
  updateMany: [SaltedgeAccountUpdateManyWithWhereNestedInput!]
}

input SaltedgeAccountUpdateManyMutationInput {
  accountId: String
  balance: Float
}

input SaltedgeAccountUpdateManyWithWhereNestedInput {
  where: SaltedgeAccountScalarWhereInput!
  data: SaltedgeAccountUpdateManyDataInput!
}

input SaltedgeAccountUpdateWithWhereUniqueNestedInput {
  where: SaltedgeAccountWhereUniqueInput!
  data: SaltedgeAccountUpdateDataInput!
}

input SaltedgeAccountUpsertWithWhereUniqueNestedInput {
  where: SaltedgeAccountWhereUniqueInput!
  update: SaltedgeAccountUpdateDataInput!
  create: SaltedgeAccountCreateInput!
}

input SaltedgeAccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  accountId: String
  accountId_not: String
  accountId_in: [String!]
  accountId_not_in: [String!]
  accountId_lt: String
  accountId_lte: String
  accountId_gt: String
  accountId_gte: String
  accountId_contains: String
  accountId_not_contains: String
  accountId_starts_with: String
  accountId_not_starts_with: String
  accountId_ends_with: String
  accountId_not_ends_with: String
  balance: Float
  balance_not: Float
  balance_in: [Float!]
  balance_not_in: [Float!]
  balance_lt: Float
  balance_lte: Float
  balance_gt: Float
  balance_gte: Float
  AND: [SaltedgeAccountWhereInput!]
  OR: [SaltedgeAccountWhereInput!]
  NOT: [SaltedgeAccountWhereInput!]
}

input SaltedgeAccountWhereUniqueInput {
  id: ID
  accountId: String
}

type SaltedgeCustomer {
  id: ID!
  customerId: String!
  user: User!
  logins(where: SaltedgeLoginWhereInput, orderBy: SaltedgeLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SaltedgeLogin!]
}

type SaltedgeCustomerConnection {
  pageInfo: PageInfo!
  edges: [SaltedgeCustomerEdge]!
  aggregate: AggregateSaltedgeCustomer!
}

input SaltedgeCustomerCreateInput {
  customerId: String!
  user: UserCreateOneWithoutSaltedgeCustomerInput!
  logins: SaltedgeLoginCreateManyWithoutSaltedgeCustomerInput
}

input SaltedgeCustomerCreateOneWithoutLoginsInput {
  create: SaltedgeCustomerCreateWithoutLoginsInput
  connect: SaltedgeCustomerWhereUniqueInput
}

input SaltedgeCustomerCreateOneWithoutUserInput {
  create: SaltedgeCustomerCreateWithoutUserInput
  connect: SaltedgeCustomerWhereUniqueInput
}

input SaltedgeCustomerCreateWithoutLoginsInput {
  customerId: String!
  user: UserCreateOneWithoutSaltedgeCustomerInput!
}

input SaltedgeCustomerCreateWithoutUserInput {
  customerId: String!
  logins: SaltedgeLoginCreateManyWithoutSaltedgeCustomerInput
}

type SaltedgeCustomerEdge {
  node: SaltedgeCustomer!
  cursor: String!
}

enum SaltedgeCustomerOrderByInput {
  id_ASC
  id_DESC
  customerId_ASC
  customerId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SaltedgeCustomerPreviousValues {
  id: ID!
  customerId: String!
}

type SaltedgeCustomerSubscriptionPayload {
  mutation: MutationType!
  node: SaltedgeCustomer
  updatedFields: [String!]
  previousValues: SaltedgeCustomerPreviousValues
}

input SaltedgeCustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SaltedgeCustomerWhereInput
  AND: [SaltedgeCustomerSubscriptionWhereInput!]
  OR: [SaltedgeCustomerSubscriptionWhereInput!]
  NOT: [SaltedgeCustomerSubscriptionWhereInput!]
}

input SaltedgeCustomerUpdateInput {
  customerId: String
  user: UserUpdateOneRequiredWithoutSaltedgeCustomerInput
  logins: SaltedgeLoginUpdateManyWithoutSaltedgeCustomerInput
}

input SaltedgeCustomerUpdateManyMutationInput {
  customerId: String
}

input SaltedgeCustomerUpdateOneRequiredWithoutLoginsInput {
  create: SaltedgeCustomerCreateWithoutLoginsInput
  update: SaltedgeCustomerUpdateWithoutLoginsDataInput
  upsert: SaltedgeCustomerUpsertWithoutLoginsInput
  connect: SaltedgeCustomerWhereUniqueInput
}

input SaltedgeCustomerUpdateOneWithoutUserInput {
  create: SaltedgeCustomerCreateWithoutUserInput
  update: SaltedgeCustomerUpdateWithoutUserDataInput
  upsert: SaltedgeCustomerUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: SaltedgeCustomerWhereUniqueInput
}

input SaltedgeCustomerUpdateWithoutLoginsDataInput {
  customerId: String
  user: UserUpdateOneRequiredWithoutSaltedgeCustomerInput
}

input SaltedgeCustomerUpdateWithoutUserDataInput {
  customerId: String
  logins: SaltedgeLoginUpdateManyWithoutSaltedgeCustomerInput
}

input SaltedgeCustomerUpsertWithoutLoginsInput {
  update: SaltedgeCustomerUpdateWithoutLoginsDataInput!
  create: SaltedgeCustomerCreateWithoutLoginsInput!
}

input SaltedgeCustomerUpsertWithoutUserInput {
  update: SaltedgeCustomerUpdateWithoutUserDataInput!
  create: SaltedgeCustomerCreateWithoutUserInput!
}

input SaltedgeCustomerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  customerId: String
  customerId_not: String
  customerId_in: [String!]
  customerId_not_in: [String!]
  customerId_lt: String
  customerId_lte: String
  customerId_gt: String
  customerId_gte: String
  customerId_contains: String
  customerId_not_contains: String
  customerId_starts_with: String
  customerId_not_starts_with: String
  customerId_ends_with: String
  customerId_not_ends_with: String
  user: UserWhereInput
  logins_every: SaltedgeLoginWhereInput
  logins_some: SaltedgeLoginWhereInput
  logins_none: SaltedgeLoginWhereInput
  AND: [SaltedgeCustomerWhereInput!]
  OR: [SaltedgeCustomerWhereInput!]
  NOT: [SaltedgeCustomerWhereInput!]
}

input SaltedgeCustomerWhereUniqueInput {
  id: ID
  customerId: String
}

type SaltedgeLogin {
  id: ID!
  loginId: String!
  saltedgeCustomer: SaltedgeCustomer!
  provider: String!
  accounts(where: SaltedgeAccountWhereInput, orderBy: SaltedgeAccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SaltedgeAccount!]
}

type SaltedgeLoginConnection {
  pageInfo: PageInfo!
  edges: [SaltedgeLoginEdge]!
  aggregate: AggregateSaltedgeLogin!
}

input SaltedgeLoginCreateInput {
  loginId: String!
  saltedgeCustomer: SaltedgeCustomerCreateOneWithoutLoginsInput!
  provider: String!
  accounts: SaltedgeAccountCreateManyInput
}

input SaltedgeLoginCreateManyWithoutSaltedgeCustomerInput {
  create: [SaltedgeLoginCreateWithoutSaltedgeCustomerInput!]
  connect: [SaltedgeLoginWhereUniqueInput!]
}

input SaltedgeLoginCreateWithoutSaltedgeCustomerInput {
  loginId: String!
  provider: String!
  accounts: SaltedgeAccountCreateManyInput
}

type SaltedgeLoginEdge {
  node: SaltedgeLogin!
  cursor: String!
}

enum SaltedgeLoginOrderByInput {
  id_ASC
  id_DESC
  loginId_ASC
  loginId_DESC
  provider_ASC
  provider_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SaltedgeLoginPreviousValues {
  id: ID!
  loginId: String!
  provider: String!
}

input SaltedgeLoginScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  loginId: String
  loginId_not: String
  loginId_in: [String!]
  loginId_not_in: [String!]
  loginId_lt: String
  loginId_lte: String
  loginId_gt: String
  loginId_gte: String
  loginId_contains: String
  loginId_not_contains: String
  loginId_starts_with: String
  loginId_not_starts_with: String
  loginId_ends_with: String
  loginId_not_ends_with: String
  provider: String
  provider_not: String
  provider_in: [String!]
  provider_not_in: [String!]
  provider_lt: String
  provider_lte: String
  provider_gt: String
  provider_gte: String
  provider_contains: String
  provider_not_contains: String
  provider_starts_with: String
  provider_not_starts_with: String
  provider_ends_with: String
  provider_not_ends_with: String
  AND: [SaltedgeLoginScalarWhereInput!]
  OR: [SaltedgeLoginScalarWhereInput!]
  NOT: [SaltedgeLoginScalarWhereInput!]
}

type SaltedgeLoginSubscriptionPayload {
  mutation: MutationType!
  node: SaltedgeLogin
  updatedFields: [String!]
  previousValues: SaltedgeLoginPreviousValues
}

input SaltedgeLoginSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SaltedgeLoginWhereInput
  AND: [SaltedgeLoginSubscriptionWhereInput!]
  OR: [SaltedgeLoginSubscriptionWhereInput!]
  NOT: [SaltedgeLoginSubscriptionWhereInput!]
}

input SaltedgeLoginUpdateInput {
  loginId: String
  saltedgeCustomer: SaltedgeCustomerUpdateOneRequiredWithoutLoginsInput
  provider: String
  accounts: SaltedgeAccountUpdateManyInput
}

input SaltedgeLoginUpdateManyDataInput {
  loginId: String
  provider: String
}

input SaltedgeLoginUpdateManyMutationInput {
  loginId: String
  provider: String
}

input SaltedgeLoginUpdateManyWithoutSaltedgeCustomerInput {
  create: [SaltedgeLoginCreateWithoutSaltedgeCustomerInput!]
  delete: [SaltedgeLoginWhereUniqueInput!]
  connect: [SaltedgeLoginWhereUniqueInput!]
  set: [SaltedgeLoginWhereUniqueInput!]
  disconnect: [SaltedgeLoginWhereUniqueInput!]
  update: [SaltedgeLoginUpdateWithWhereUniqueWithoutSaltedgeCustomerInput!]
  upsert: [SaltedgeLoginUpsertWithWhereUniqueWithoutSaltedgeCustomerInput!]
  deleteMany: [SaltedgeLoginScalarWhereInput!]
  updateMany: [SaltedgeLoginUpdateManyWithWhereNestedInput!]
}

input SaltedgeLoginUpdateManyWithWhereNestedInput {
  where: SaltedgeLoginScalarWhereInput!
  data: SaltedgeLoginUpdateManyDataInput!
}

input SaltedgeLoginUpdateWithoutSaltedgeCustomerDataInput {
  loginId: String
  provider: String
  accounts: SaltedgeAccountUpdateManyInput
}

input SaltedgeLoginUpdateWithWhereUniqueWithoutSaltedgeCustomerInput {
  where: SaltedgeLoginWhereUniqueInput!
  data: SaltedgeLoginUpdateWithoutSaltedgeCustomerDataInput!
}

input SaltedgeLoginUpsertWithWhereUniqueWithoutSaltedgeCustomerInput {
  where: SaltedgeLoginWhereUniqueInput!
  update: SaltedgeLoginUpdateWithoutSaltedgeCustomerDataInput!
  create: SaltedgeLoginCreateWithoutSaltedgeCustomerInput!
}

input SaltedgeLoginWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  loginId: String
  loginId_not: String
  loginId_in: [String!]
  loginId_not_in: [String!]
  loginId_lt: String
  loginId_lte: String
  loginId_gt: String
  loginId_gte: String
  loginId_contains: String
  loginId_not_contains: String
  loginId_starts_with: String
  loginId_not_starts_with: String
  loginId_ends_with: String
  loginId_not_ends_with: String
  saltedgeCustomer: SaltedgeCustomerWhereInput
  provider: String
  provider_not: String
  provider_in: [String!]
  provider_not_in: [String!]
  provider_lt: String
  provider_lte: String
  provider_gt: String
  provider_gte: String
  provider_contains: String
  provider_not_contains: String
  provider_starts_with: String
  provider_not_starts_with: String
  provider_ends_with: String
  provider_not_ends_with: String
  accounts_every: SaltedgeAccountWhereInput
  accounts_some: SaltedgeAccountWhereInput
  accounts_none: SaltedgeAccountWhereInput
  AND: [SaltedgeLoginWhereInput!]
  OR: [SaltedgeLoginWhereInput!]
  NOT: [SaltedgeLoginWhereInput!]
}

input SaltedgeLoginWhereUniqueInput {
  id: ID
  loginId: String
}

type Subscription {
  saltedgeAccount(where: SaltedgeAccountSubscriptionWhereInput): SaltedgeAccountSubscriptionPayload
  saltedgeCustomer(where: SaltedgeCustomerSubscriptionWhereInput): SaltedgeCustomerSubscriptionPayload
  saltedgeLogin(where: SaltedgeLoginSubscriptionWhereInput): SaltedgeLoginSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  psid: String!
  saltedgeCustomer: SaltedgeCustomer
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  psid: String!
  saltedgeCustomer: SaltedgeCustomerCreateOneWithoutUserInput
}

input UserCreateOneWithoutSaltedgeCustomerInput {
  create: UserCreateWithoutSaltedgeCustomerInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSaltedgeCustomerInput {
  psid: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  psid_ASC
  psid_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  psid: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  psid: String
  saltedgeCustomer: SaltedgeCustomerUpdateOneWithoutUserInput
}

input UserUpdateManyMutationInput {
  psid: String
}

input UserUpdateOneRequiredWithoutSaltedgeCustomerInput {
  create: UserCreateWithoutSaltedgeCustomerInput
  update: UserUpdateWithoutSaltedgeCustomerDataInput
  upsert: UserUpsertWithoutSaltedgeCustomerInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutSaltedgeCustomerDataInput {
  psid: String
}

input UserUpsertWithoutSaltedgeCustomerInput {
  update: UserUpdateWithoutSaltedgeCustomerDataInput!
  create: UserCreateWithoutSaltedgeCustomerInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  psid: String
  psid_not: String
  psid_in: [String!]
  psid_not_in: [String!]
  psid_lt: String
  psid_lte: String
  psid_gt: String
  psid_gte: String
  psid_contains: String
  psid_not_contains: String
  psid_starts_with: String
  psid_not_starts_with: String
  psid_ends_with: String
  psid_not_ends_with: String
  saltedgeCustomer: SaltedgeCustomerWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  psid: String
}
`
      }
    