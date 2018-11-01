// Code generated by Prisma (prisma@1.19.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  saltedgeAccount: (where?: SaltedgeAccountWhereInput) => Promise<boolean>;
  saltedgeCustomer: (where?: SaltedgeCustomerWhereInput) => Promise<boolean>;
  saltedgeLogin: (where?: SaltedgeLoginWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  saltedgeAccount: (where: SaltedgeAccountWhereUniqueInput) => SaltedgeAccount;
  saltedgeAccounts: (
    args?: {
      where?: SaltedgeAccountWhereInput;
      orderBy?: SaltedgeAccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<SaltedgeAccountNode>;
  saltedgeAccountsConnection: (
    args?: {
      where?: SaltedgeAccountWhereInput;
      orderBy?: SaltedgeAccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => SaltedgeAccountConnection;
  saltedgeCustomer: (
    where: SaltedgeCustomerWhereUniqueInput
  ) => SaltedgeCustomer;
  saltedgeCustomers: (
    args?: {
      where?: SaltedgeCustomerWhereInput;
      orderBy?: SaltedgeCustomerOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<SaltedgeCustomerNode>;
  saltedgeCustomersConnection: (
    args?: {
      where?: SaltedgeCustomerWhereInput;
      orderBy?: SaltedgeCustomerOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => SaltedgeCustomerConnection;
  saltedgeLogin: (where: SaltedgeLoginWhereUniqueInput) => SaltedgeLogin;
  saltedgeLogins: (
    args?: {
      where?: SaltedgeLoginWhereInput;
      orderBy?: SaltedgeLoginOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<SaltedgeLoginNode>;
  saltedgeLoginsConnection: (
    args?: {
      where?: SaltedgeLoginWhereInput;
      orderBy?: SaltedgeLoginOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => SaltedgeLoginConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserNode>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSaltedgeAccount: (data: SaltedgeAccountCreateInput) => SaltedgeAccount;
  updateSaltedgeAccount: (
    args: {
      data: SaltedgeAccountUpdateInput;
      where: SaltedgeAccountWhereUniqueInput;
    }
  ) => SaltedgeAccount;
  updateManySaltedgeAccounts: (
    args: {
      data: SaltedgeAccountUpdateInput;
      where?: SaltedgeAccountWhereInput;
    }
  ) => BatchPayload;
  upsertSaltedgeAccount: (
    args: {
      where: SaltedgeAccountWhereUniqueInput;
      create: SaltedgeAccountCreateInput;
      update: SaltedgeAccountUpdateInput;
    }
  ) => SaltedgeAccount;
  deleteSaltedgeAccount: (
    where: SaltedgeAccountWhereUniqueInput
  ) => SaltedgeAccount;
  deleteManySaltedgeAccounts: (
    where?: SaltedgeAccountWhereInput
  ) => BatchPayload;
  createSaltedgeCustomer: (
    data: SaltedgeCustomerCreateInput
  ) => SaltedgeCustomer;
  updateSaltedgeCustomer: (
    args: {
      data: SaltedgeCustomerUpdateInput;
      where: SaltedgeCustomerWhereUniqueInput;
    }
  ) => SaltedgeCustomer;
  updateManySaltedgeCustomers: (
    args: {
      data: SaltedgeCustomerUpdateInput;
      where?: SaltedgeCustomerWhereInput;
    }
  ) => BatchPayload;
  upsertSaltedgeCustomer: (
    args: {
      where: SaltedgeCustomerWhereUniqueInput;
      create: SaltedgeCustomerCreateInput;
      update: SaltedgeCustomerUpdateInput;
    }
  ) => SaltedgeCustomer;
  deleteSaltedgeCustomer: (
    where: SaltedgeCustomerWhereUniqueInput
  ) => SaltedgeCustomer;
  deleteManySaltedgeCustomers: (
    where?: SaltedgeCustomerWhereInput
  ) => BatchPayload;
  createSaltedgeLogin: (data: SaltedgeLoginCreateInput) => SaltedgeLogin;
  updateSaltedgeLogin: (
    args: {
      data: SaltedgeLoginUpdateInput;
      where: SaltedgeLoginWhereUniqueInput;
    }
  ) => SaltedgeLogin;
  updateManySaltedgeLogins: (
    args: { data: SaltedgeLoginUpdateInput; where?: SaltedgeLoginWhereInput }
  ) => BatchPayload;
  upsertSaltedgeLogin: (
    args: {
      where: SaltedgeLoginWhereUniqueInput;
      create: SaltedgeLoginCreateInput;
      update: SaltedgeLoginUpdateInput;
    }
  ) => SaltedgeLogin;
  deleteSaltedgeLogin: (where: SaltedgeLoginWhereUniqueInput) => SaltedgeLogin;
  deleteManySaltedgeLogins: (where?: SaltedgeLoginWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  saltedgeAccount: (
    where?: SaltedgeAccountSubscriptionWhereInput
  ) => SaltedgeAccountSubscriptionPayloadSubscription;
  saltedgeCustomer: (
    where?: SaltedgeCustomerSubscriptionWhereInput
  ) => SaltedgeCustomerSubscriptionPayloadSubscription;
  saltedgeLogin: (
    where?: SaltedgeLoginSubscriptionWhereInput
  ) => SaltedgeLoginSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SaltedgeAccountOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "accountId_ASC"
  | "accountId_DESC"
  | "balance_ASC"
  | "balance_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type SaltedgeLoginOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "loginId_ASC"
  | "loginId_DESC"
  | "provider_ASC"
  | "provider_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type SaltedgeCustomerOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "customerId_ASC"
  | "customerId_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "psid_ASC"
  | "psid_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface SaltedgeLoginCreateManyWithoutSaltedgeCustomerInput {
  create?:
    | SaltedgeLoginCreateWithoutSaltedgeCustomerInput[]
    | SaltedgeLoginCreateWithoutSaltedgeCustomerInput;
  connect?: SaltedgeLoginWhereUniqueInput[] | SaltedgeLoginWhereUniqueInput;
}

export type SaltedgeAccountWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  accountId?: String;
}>;

export interface SaltedgeLoginUpdateInput {
  loginId?: String;
  saltedgeCustomer?: SaltedgeCustomerUpdateOneRequiredWithoutLoginsInput;
  provider?: String;
  accounts?: SaltedgeAccountUpdateManyInput;
}

export interface SaltedgeAccountUpdateManyInput {
  create?: SaltedgeAccountCreateInput[] | SaltedgeAccountCreateInput;
  update?:
    | SaltedgeAccountUpdateWithWhereUniqueNestedInput[]
    | SaltedgeAccountUpdateWithWhereUniqueNestedInput;
  upsert?:
    | SaltedgeAccountUpsertWithWhereUniqueNestedInput[]
    | SaltedgeAccountUpsertWithWhereUniqueNestedInput;
  delete?: SaltedgeAccountWhereUniqueInput[] | SaltedgeAccountWhereUniqueInput;
  connect?: SaltedgeAccountWhereUniqueInput[] | SaltedgeAccountWhereUniqueInput;
  disconnect?:
    | SaltedgeAccountWhereUniqueInput[]
    | SaltedgeAccountWhereUniqueInput;
}

export interface SaltedgeCustomerCreateWithoutLoginsInput {
  customerId: String;
  user: UserCreateOneWithoutSaltedgeCustomerInput;
}

export interface SaltedgeCustomerUpdateInput {
  customerId?: String;
  user?: UserUpdateOneRequiredWithoutSaltedgeCustomerInput;
  logins?: SaltedgeLoginUpdateManyWithoutSaltedgeCustomerInput;
}

export interface SaltedgeCustomerCreateOneWithoutLoginsInput {
  create?: SaltedgeCustomerCreateWithoutLoginsInput;
  connect?: SaltedgeCustomerWhereUniqueInput;
}

export interface SaltedgeLoginSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: SaltedgeLoginWhereInput;
  AND?:
    | SaltedgeLoginSubscriptionWhereInput[]
    | SaltedgeLoginSubscriptionWhereInput;
  OR?:
    | SaltedgeLoginSubscriptionWhereInput[]
    | SaltedgeLoginSubscriptionWhereInput;
  NOT?:
    | SaltedgeLoginSubscriptionWhereInput[]
    | SaltedgeLoginSubscriptionWhereInput;
}

export interface SaltedgeLoginCreateInput {
  loginId: String;
  saltedgeCustomer: SaltedgeCustomerCreateOneWithoutLoginsInput;
  provider: String;
  accounts?: SaltedgeAccountCreateManyInput;
}

export interface SaltedgeAccountSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: SaltedgeAccountWhereInput;
  AND?:
    | SaltedgeAccountSubscriptionWhereInput[]
    | SaltedgeAccountSubscriptionWhereInput;
  OR?:
    | SaltedgeAccountSubscriptionWhereInput[]
    | SaltedgeAccountSubscriptionWhereInput;
  NOT?:
    | SaltedgeAccountSubscriptionWhereInput[]
    | SaltedgeAccountSubscriptionWhereInput;
}

export interface SaltedgeCustomerUpsertWithoutUserInput {
  update: SaltedgeCustomerUpdateWithoutUserDataInput;
  create: SaltedgeCustomerCreateWithoutUserInput;
}

export interface SaltedgeLoginWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  loginId?: String;
  loginId_not?: String;
  loginId_in?: String[] | String;
  loginId_not_in?: String[] | String;
  loginId_lt?: String;
  loginId_lte?: String;
  loginId_gt?: String;
  loginId_gte?: String;
  loginId_contains?: String;
  loginId_not_contains?: String;
  loginId_starts_with?: String;
  loginId_not_starts_with?: String;
  loginId_ends_with?: String;
  loginId_not_ends_with?: String;
  saltedgeCustomer?: SaltedgeCustomerWhereInput;
  provider?: String;
  provider_not?: String;
  provider_in?: String[] | String;
  provider_not_in?: String[] | String;
  provider_lt?: String;
  provider_lte?: String;
  provider_gt?: String;
  provider_gte?: String;
  provider_contains?: String;
  provider_not_contains?: String;
  provider_starts_with?: String;
  provider_not_starts_with?: String;
  provider_ends_with?: String;
  provider_not_ends_with?: String;
  accounts_every?: SaltedgeAccountWhereInput;
  accounts_some?: SaltedgeAccountWhereInput;
  accounts_none?: SaltedgeAccountWhereInput;
  AND?: SaltedgeLoginWhereInput[] | SaltedgeLoginWhereInput;
  OR?: SaltedgeLoginWhereInput[] | SaltedgeLoginWhereInput;
  NOT?: SaltedgeLoginWhereInput[] | SaltedgeLoginWhereInput;
}

export interface SaltedgeAccountCreateInput {
  accountId: String;
  balance?: Float;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  psid?: String;
  psid_not?: String;
  psid_in?: String[] | String;
  psid_not_in?: String[] | String;
  psid_lt?: String;
  psid_lte?: String;
  psid_gt?: String;
  psid_gte?: String;
  psid_contains?: String;
  psid_not_contains?: String;
  psid_starts_with?: String;
  psid_not_starts_with?: String;
  psid_ends_with?: String;
  psid_not_ends_with?: String;
  saltedgeCustomer?: SaltedgeCustomerWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface SaltedgeAccountUpdateInput {
  accountId?: String;
  balance?: Float;
}

export interface SaltedgeCustomerUpdateOneWithoutUserInput {
  create?: SaltedgeCustomerCreateWithoutUserInput;
  update?: SaltedgeCustomerUpdateWithoutUserDataInput;
  upsert?: SaltedgeCustomerUpsertWithoutUserInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: SaltedgeCustomerWhereUniqueInput;
}

export interface SaltedgeLoginUpsertWithWhereUniqueWithoutSaltedgeCustomerInput {
  where: SaltedgeLoginWhereUniqueInput;
  update: SaltedgeLoginUpdateWithoutSaltedgeCustomerDataInput;
  create: SaltedgeLoginCreateWithoutSaltedgeCustomerInput;
}

export interface SaltedgeCustomerCreateWithoutUserInput {
  customerId: String;
  logins?: SaltedgeLoginCreateManyWithoutSaltedgeCustomerInput;
}

export interface SaltedgeAccountUpsertWithWhereUniqueNestedInput {
  where: SaltedgeAccountWhereUniqueInput;
  update: SaltedgeAccountUpdateDataInput;
  create: SaltedgeAccountCreateInput;
}

export interface UserCreateInput {
  psid: String;
  saltedgeCustomer?: SaltedgeCustomerCreateOneWithoutUserInput;
}

export interface SaltedgeCustomerCreateInput {
  customerId: String;
  user: UserCreateOneWithoutSaltedgeCustomerInput;
  logins?: SaltedgeLoginCreateManyWithoutSaltedgeCustomerInput;
}

export interface SaltedgeCustomerUpsertWithoutLoginsInput {
  update: SaltedgeCustomerUpdateWithoutLoginsDataInput;
  create: SaltedgeCustomerCreateWithoutLoginsInput;
}

export interface UserCreateOneWithoutSaltedgeCustomerInput {
  create?: UserCreateWithoutSaltedgeCustomerInput;
  connect?: UserWhereUniqueInput;
}

export interface SaltedgeCustomerUpdateOneRequiredWithoutLoginsInput {
  create?: SaltedgeCustomerCreateWithoutLoginsInput;
  update?: SaltedgeCustomerUpdateWithoutLoginsDataInput;
  upsert?: SaltedgeCustomerUpsertWithoutLoginsInput;
  connect?: SaltedgeCustomerWhereUniqueInput;
}

export interface UserCreateWithoutSaltedgeCustomerInput {
  psid: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface SaltedgeAccountUpdateDataInput {
  accountId?: String;
  balance?: Float;
}

export type SaltedgeCustomerWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  customerId?: String;
}>;

export interface SaltedgeLoginCreateWithoutSaltedgeCustomerInput {
  loginId: String;
  provider: String;
  accounts?: SaltedgeAccountCreateManyInput;
}

export interface SaltedgeCustomerWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  customerId?: String;
  customerId_not?: String;
  customerId_in?: String[] | String;
  customerId_not_in?: String[] | String;
  customerId_lt?: String;
  customerId_lte?: String;
  customerId_gt?: String;
  customerId_gte?: String;
  customerId_contains?: String;
  customerId_not_contains?: String;
  customerId_starts_with?: String;
  customerId_not_starts_with?: String;
  customerId_ends_with?: String;
  customerId_not_ends_with?: String;
  user?: UserWhereInput;
  logins_every?: SaltedgeLoginWhereInput;
  logins_some?: SaltedgeLoginWhereInput;
  logins_none?: SaltedgeLoginWhereInput;
  AND?: SaltedgeCustomerWhereInput[] | SaltedgeCustomerWhereInput;
  OR?: SaltedgeCustomerWhereInput[] | SaltedgeCustomerWhereInput;
  NOT?: SaltedgeCustomerWhereInput[] | SaltedgeCustomerWhereInput;
}

export interface SaltedgeAccountCreateManyInput {
  create?: SaltedgeAccountCreateInput[] | SaltedgeAccountCreateInput;
  connect?: SaltedgeAccountWhereUniqueInput[] | SaltedgeAccountWhereUniqueInput;
}

export interface UserUpdateInput {
  psid?: String;
  saltedgeCustomer?: SaltedgeCustomerUpdateOneWithoutUserInput;
}

export interface SaltedgeAccountUpdateWithWhereUniqueNestedInput {
  where: SaltedgeAccountWhereUniqueInput;
  data: SaltedgeAccountUpdateDataInput;
}

export type SaltedgeLoginWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  loginId?: String;
}>;

export interface UserUpdateOneRequiredWithoutSaltedgeCustomerInput {
  create?: UserCreateWithoutSaltedgeCustomerInput;
  update?: UserUpdateWithoutSaltedgeCustomerDataInput;
  upsert?: UserUpsertWithoutSaltedgeCustomerInput;
  connect?: UserWhereUniqueInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  psid?: String;
}>;

export interface UserUpdateWithoutSaltedgeCustomerDataInput {
  psid?: String;
}

export interface SaltedgeCustomerUpdateWithoutUserDataInput {
  customerId?: String;
  logins?: SaltedgeLoginUpdateManyWithoutSaltedgeCustomerInput;
}

export interface SaltedgeLoginUpdateWithoutSaltedgeCustomerDataInput {
  loginId?: String;
  provider?: String;
  accounts?: SaltedgeAccountUpdateManyInput;
}

export interface SaltedgeLoginUpdateWithWhereUniqueWithoutSaltedgeCustomerInput {
  where: SaltedgeLoginWhereUniqueInput;
  data: SaltedgeLoginUpdateWithoutSaltedgeCustomerDataInput;
}

export interface SaltedgeLoginUpdateManyWithoutSaltedgeCustomerInput {
  create?:
    | SaltedgeLoginCreateWithoutSaltedgeCustomerInput[]
    | SaltedgeLoginCreateWithoutSaltedgeCustomerInput;
  delete?: SaltedgeLoginWhereUniqueInput[] | SaltedgeLoginWhereUniqueInput;
  connect?: SaltedgeLoginWhereUniqueInput[] | SaltedgeLoginWhereUniqueInput;
  disconnect?: SaltedgeLoginWhereUniqueInput[] | SaltedgeLoginWhereUniqueInput;
  update?:
    | SaltedgeLoginUpdateWithWhereUniqueWithoutSaltedgeCustomerInput[]
    | SaltedgeLoginUpdateWithWhereUniqueWithoutSaltedgeCustomerInput;
  upsert?:
    | SaltedgeLoginUpsertWithWhereUniqueWithoutSaltedgeCustomerInput[]
    | SaltedgeLoginUpsertWithWhereUniqueWithoutSaltedgeCustomerInput;
}

export interface UserUpsertWithoutSaltedgeCustomerInput {
  update: UserUpdateWithoutSaltedgeCustomerDataInput;
  create: UserCreateWithoutSaltedgeCustomerInput;
}

export interface SaltedgeAccountWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  accountId?: String;
  accountId_not?: String;
  accountId_in?: String[] | String;
  accountId_not_in?: String[] | String;
  accountId_lt?: String;
  accountId_lte?: String;
  accountId_gt?: String;
  accountId_gte?: String;
  accountId_contains?: String;
  accountId_not_contains?: String;
  accountId_starts_with?: String;
  accountId_not_starts_with?: String;
  accountId_ends_with?: String;
  accountId_not_ends_with?: String;
  balance?: Float;
  balance_not?: Float;
  balance_in?: Float[] | Float;
  balance_not_in?: Float[] | Float;
  balance_lt?: Float;
  balance_lte?: Float;
  balance_gt?: Float;
  balance_gte?: Float;
  AND?: SaltedgeAccountWhereInput[] | SaltedgeAccountWhereInput;
  OR?: SaltedgeAccountWhereInput[] | SaltedgeAccountWhereInput;
  NOT?: SaltedgeAccountWhereInput[] | SaltedgeAccountWhereInput;
}

export interface SaltedgeCustomerSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: SaltedgeCustomerWhereInput;
  AND?:
    | SaltedgeCustomerSubscriptionWhereInput[]
    | SaltedgeCustomerSubscriptionWhereInput;
  OR?:
    | SaltedgeCustomerSubscriptionWhereInput[]
    | SaltedgeCustomerSubscriptionWhereInput;
  NOT?:
    | SaltedgeCustomerSubscriptionWhereInput[]
    | SaltedgeCustomerSubscriptionWhereInput;
}

export interface SaltedgeCustomerUpdateWithoutLoginsDataInput {
  customerId?: String;
  user?: UserUpdateOneRequiredWithoutSaltedgeCustomerInput;
}

export interface SaltedgeCustomerCreateOneWithoutUserInput {
  create?: SaltedgeCustomerCreateWithoutUserInput;
  connect?: SaltedgeCustomerWhereUniqueInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  psid: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  psid: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  psid: () => Promise<AsyncIterator<String>>;
}

export interface SaltedgeLoginNode {
  id: ID_Output;
  loginId: String;
  provider: String;
}

export interface SaltedgeLogin
  extends Promise<SaltedgeLoginNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  loginId: () => Promise<String>;
  saltedgeCustomer: <T = SaltedgeCustomer>() => T;
  provider: () => Promise<String>;
  accounts: <T = FragmentableArray<SaltedgeAccountNode>>(
    args?: {
      where?: SaltedgeAccountWhereInput;
      orderBy?: SaltedgeAccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface SaltedgeLoginSubscription
  extends Promise<AsyncIterator<SaltedgeLoginNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  loginId: () => Promise<AsyncIterator<String>>;
  saltedgeCustomer: <T = SaltedgeCustomerSubscription>() => T;
  provider: () => Promise<AsyncIterator<String>>;
  accounts: <T = Promise<AsyncIterator<SaltedgeAccountSubscription>>>(
    args?: {
      where?: SaltedgeAccountWhereInput;
      orderBy?: SaltedgeAccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface SaltedgeAccountConnectionNode {}

export interface SaltedgeAccountConnection
  extends Promise<SaltedgeAccountConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<SaltedgeAccountEdgeNode>>() => T;
  aggregate: <T = AggregateSaltedgeAccount>() => T;
}

export interface SaltedgeAccountConnectionSubscription
  extends Promise<AsyncIterator<SaltedgeAccountConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SaltedgeAccountEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSaltedgeAccountSubscription>() => T;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface SaltedgeLoginSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface SaltedgeLoginSubscriptionPayload
  extends Promise<SaltedgeLoginSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SaltedgeLogin>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SaltedgeLoginPreviousValues>() => T;
}

export interface SaltedgeLoginSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SaltedgeLoginSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SaltedgeLoginSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SaltedgeLoginPreviousValuesSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserNode {
  id: ID_Output;
  psid: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  psid: () => Promise<String>;
  saltedgeCustomer: <T = SaltedgeCustomer>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  psid: () => Promise<AsyncIterator<String>>;
  saltedgeCustomer: <T = SaltedgeCustomerSubscription>() => T;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface SaltedgeCustomerNode {
  id: ID_Output;
  customerId: String;
}

export interface SaltedgeCustomer
  extends Promise<SaltedgeCustomerNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  customerId: () => Promise<String>;
  user: <T = User>() => T;
  logins: <T = FragmentableArray<SaltedgeLoginNode>>(
    args?: {
      where?: SaltedgeLoginWhereInput;
      orderBy?: SaltedgeLoginOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface SaltedgeCustomerSubscription
  extends Promise<AsyncIterator<SaltedgeCustomerNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  customerId: () => Promise<AsyncIterator<String>>;
  user: <T = UserSubscription>() => T;
  logins: <T = Promise<AsyncIterator<SaltedgeLoginSubscription>>>(
    args?: {
      where?: SaltedgeLoginWhereInput;
      orderBy?: SaltedgeLoginOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface SaltedgeAccountNode {
  id: ID_Output;
  accountId: String;
  balance?: Float;
}

export interface SaltedgeAccount
  extends Promise<SaltedgeAccountNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  accountId: () => Promise<String>;
  balance: () => Promise<Float>;
}

export interface SaltedgeAccountSubscription
  extends Promise<AsyncIterator<SaltedgeAccountNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  accountId: () => Promise<AsyncIterator<String>>;
  balance: () => Promise<AsyncIterator<Float>>;
}

export interface AggregateSaltedgeAccountNode {
  count: Int;
}

export interface AggregateSaltedgeAccount
  extends Promise<AggregateSaltedgeAccountNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSaltedgeAccountSubscription
  extends Promise<AsyncIterator<AggregateSaltedgeAccountNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface SaltedgeLoginEdgeNode {
  cursor: String;
}

export interface SaltedgeLoginEdge
  extends Promise<SaltedgeLoginEdgeNode>,
    Fragmentable {
  node: <T = SaltedgeLogin>() => T;
  cursor: () => Promise<String>;
}

export interface SaltedgeLoginEdgeSubscription
  extends Promise<AsyncIterator<SaltedgeLoginEdgeNode>>,
    Fragmentable {
  node: <T = SaltedgeLoginSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface SaltedgeLoginPreviousValuesNode {
  id: ID_Output;
  loginId: String;
  provider: String;
}

export interface SaltedgeLoginPreviousValues
  extends Promise<SaltedgeLoginPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  loginId: () => Promise<String>;
  provider: () => Promise<String>;
}

export interface SaltedgeLoginPreviousValuesSubscription
  extends Promise<AsyncIterator<SaltedgeLoginPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  loginId: () => Promise<AsyncIterator<String>>;
  provider: () => Promise<AsyncIterator<String>>;
}

export interface AggregateSaltedgeCustomerNode {
  count: Int;
}

export interface AggregateSaltedgeCustomer
  extends Promise<AggregateSaltedgeCustomerNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSaltedgeCustomerSubscription
  extends Promise<AsyncIterator<AggregateSaltedgeCustomerNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface SaltedgeAccountSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface SaltedgeAccountSubscriptionPayload
  extends Promise<SaltedgeAccountSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SaltedgeAccount>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SaltedgeAccountPreviousValues>() => T;
}

export interface SaltedgeAccountSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SaltedgeAccountSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SaltedgeAccountSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SaltedgeAccountPreviousValuesSubscription>() => T;
}

export interface SaltedgeCustomerConnectionNode {}

export interface SaltedgeCustomerConnection
  extends Promise<SaltedgeCustomerConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<SaltedgeCustomerEdgeNode>>() => T;
  aggregate: <T = AggregateSaltedgeCustomer>() => T;
}

export interface SaltedgeCustomerConnectionSubscription
  extends Promise<AsyncIterator<SaltedgeCustomerConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SaltedgeCustomerEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSaltedgeCustomerSubscription>() => T;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdgeNode>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface SaltedgeCustomerPreviousValuesNode {
  id: ID_Output;
  customerId: String;
}

export interface SaltedgeCustomerPreviousValues
  extends Promise<SaltedgeCustomerPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  customerId: () => Promise<String>;
}

export interface SaltedgeCustomerPreviousValuesSubscription
  extends Promise<AsyncIterator<SaltedgeCustomerPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  customerId: () => Promise<AsyncIterator<String>>;
}

export interface SaltedgeCustomerSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface SaltedgeCustomerSubscriptionPayload
  extends Promise<SaltedgeCustomerSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SaltedgeCustomer>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SaltedgeCustomerPreviousValues>() => T;
}

export interface SaltedgeCustomerSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SaltedgeCustomerSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SaltedgeCustomerSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SaltedgeCustomerPreviousValuesSubscription>() => T;
}

export interface SaltedgeAccountEdgeNode {
  cursor: String;
}

export interface SaltedgeAccountEdge
  extends Promise<SaltedgeAccountEdgeNode>,
    Fragmentable {
  node: <T = SaltedgeAccount>() => T;
  cursor: () => Promise<String>;
}

export interface SaltedgeAccountEdgeSubscription
  extends Promise<AsyncIterator<SaltedgeAccountEdgeNode>>,
    Fragmentable {
  node: <T = SaltedgeAccountSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface SaltedgeAccountPreviousValuesNode {
  id: ID_Output;
  accountId: String;
  balance?: Float;
}

export interface SaltedgeAccountPreviousValues
  extends Promise<SaltedgeAccountPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  accountId: () => Promise<String>;
  balance: () => Promise<Float>;
}

export interface SaltedgeAccountPreviousValuesSubscription
  extends Promise<AsyncIterator<SaltedgeAccountPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  accountId: () => Promise<AsyncIterator<String>>;
  balance: () => Promise<AsyncIterator<Float>>;
}

export interface AggregateSaltedgeLoginNode {
  count: Int;
}

export interface AggregateSaltedgeLogin
  extends Promise<AggregateSaltedgeLoginNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSaltedgeLoginSubscription
  extends Promise<AsyncIterator<AggregateSaltedgeLoginNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface SaltedgeCustomerEdgeNode {
  cursor: String;
}

export interface SaltedgeCustomerEdge
  extends Promise<SaltedgeCustomerEdgeNode>,
    Fragmentable {
  node: <T = SaltedgeCustomer>() => T;
  cursor: () => Promise<String>;
}

export interface SaltedgeCustomerEdgeSubscription
  extends Promise<AsyncIterator<SaltedgeCustomerEdgeNode>>,
    Fragmentable {
  node: <T = SaltedgeCustomerSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface SaltedgeLoginConnectionNode {}

export interface SaltedgeLoginConnection
  extends Promise<SaltedgeLoginConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<SaltedgeLoginEdgeNode>>() => T;
  aggregate: <T = AggregateSaltedgeLogin>() => T;
}

export interface SaltedgeLoginConnectionSubscription
  extends Promise<AsyncIterator<SaltedgeLoginConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SaltedgeLoginEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSaltedgeLoginSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const prisma: Prisma;
