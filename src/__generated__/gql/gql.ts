/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation AddParticipant($activityID: ObjectID!, $userId: ObjectID!) {\n  addParticipant(id: $activityID, userID: $userId) \n}": types.AddParticipantDocument,
    "\n  query GetAllPing($first: Int!, $after: String) {\n    getAllPing(first: $first, after: $after) {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      edges {\n        cursor\n        node {\n          id\n        title\n        description\n        createdAt\n        latitude\n        longitude\n        media {\n            key\n            type\n        }\n        picks\n        radius\n        url\n        }\n      }\n      owner {\n        id\n        createdAt\n        username\n        email\n        name {\n            firstName\n            lastName\n            middleName\n        }\n        picture\n        picks\n      }\n    }\n  }\n": types.GetAllPingDocument,
    "\nquery GetParticipants($activityId: ObjectID!, $first: Int, $after: String) {\n  getParticipants(pingID: $activityId, first: $first, after: $after) {\n    members {\n      id\n      username\n      picture\n      name {\n        firstName\n        lastName\n        middleName\n      }\n    }\n    totalCount\n  }\n}\n": types.GetParticipantsDocument,
    "\nmutation CreateUser($payload: CreateUserInput!) {\n  createUser(payload: $payload) {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n": types.CreateUserDocument,
    "\n  query isUsernameAvailable($username: String!) {\n    isUsernameAvailable(username: $username)\n  }\n": types.IsUsernameAvailableDocument,
    "\nquery User {\n  user {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n": types.UserDocument,
    "\nmutation createPing($createPingInput: CreatePingInput!) {\n    createPing(payload: $createPingInput){\n        id\n        }\n    }\n    ": types.CreatePingDocument,
    "\nmutation updatePing($id: ObjectID! $UPingInput: UPingInput!) {\n    updatePing(id: $id, payload: $UPingInput) {\n        id\n        createdAt\n        title\n        description\n        picks\n        latitude\n        longitude\n        media {\n            key\n            type\n        }\n        user {\n            id\n            name {\n                lastName\n                firstName\n            }\n            username\n            picture\n        }\n    }\n    }": types.UpdatePingDocument,
    "\n  mutation UpdateUser($payload: UpdateUserInput!) {\n  updateUser(payload: $payload) {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n": types.UpdateUserDocument,
    "\n  query GetPingsWithinRadius($payload: UPingsWithinRadiusInput!, $first: Int!, $picks: [String], $after: String) {\n  getPingsWithinRadius(payload: $payload, first: $first, picks: $picks, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        picks\n        user {\n          id\n          username\n          name {\n            firstName\n            lastName\n            middleName\n          }\n          email\n          picture\n          picks\n        }\n        description\n        createdAt\n        latitude\n        longitude\n        media {\n          key\n          type\n        }\n        radius\n        title\n        url\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n  }\n}\n\n  ": types.GetPingsWithinRadiusDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddParticipant($activityID: ObjectID!, $userId: ObjectID!) {\n  addParticipant(id: $activityID, userID: $userId) \n}"): (typeof documents)["\nmutation AddParticipant($activityID: ObjectID!, $userId: ObjectID!) {\n  addParticipant(id: $activityID, userID: $userId) \n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllPing($first: Int!, $after: String) {\n    getAllPing(first: $first, after: $after) {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      edges {\n        cursor\n        node {\n          id\n        title\n        description\n        createdAt\n        latitude\n        longitude\n        media {\n            key\n            type\n        }\n        picks\n        radius\n        url\n        }\n      }\n      owner {\n        id\n        createdAt\n        username\n        email\n        name {\n            firstName\n            lastName\n            middleName\n        }\n        picture\n        picks\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllPing($first: Int!, $after: String) {\n    getAllPing(first: $first, after: $after) {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      edges {\n        cursor\n        node {\n          id\n        title\n        description\n        createdAt\n        latitude\n        longitude\n        media {\n            key\n            type\n        }\n        picks\n        radius\n        url\n        }\n      }\n      owner {\n        id\n        createdAt\n        username\n        email\n        name {\n            firstName\n            lastName\n            middleName\n        }\n        picture\n        picks\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetParticipants($activityId: ObjectID!, $first: Int, $after: String) {\n  getParticipants(pingID: $activityId, first: $first, after: $after) {\n    members {\n      id\n      username\n      picture\n      name {\n        firstName\n        lastName\n        middleName\n      }\n    }\n    totalCount\n  }\n}\n"): (typeof documents)["\nquery GetParticipants($activityId: ObjectID!, $first: Int, $after: String) {\n  getParticipants(pingID: $activityId, first: $first, after: $after) {\n    members {\n      id\n      username\n      picture\n      name {\n        firstName\n        lastName\n        middleName\n      }\n    }\n    totalCount\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateUser($payload: CreateUserInput!) {\n  createUser(payload: $payload) {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n"): (typeof documents)["\nmutation CreateUser($payload: CreateUserInput!) {\n  createUser(payload: $payload) {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query isUsernameAvailable($username: String!) {\n    isUsernameAvailable(username: $username)\n  }\n"): (typeof documents)["\n  query isUsernameAvailable($username: String!) {\n    isUsernameAvailable(username: $username)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery User {\n  user {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n"): (typeof documents)["\nquery User {\n  user {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createPing($createPingInput: CreatePingInput!) {\n    createPing(payload: $createPingInput){\n        id\n        }\n    }\n    "): (typeof documents)["\nmutation createPing($createPingInput: CreatePingInput!) {\n    createPing(payload: $createPingInput){\n        id\n        }\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updatePing($id: ObjectID! $UPingInput: UPingInput!) {\n    updatePing(id: $id, payload: $UPingInput) {\n        id\n        createdAt\n        title\n        description\n        picks\n        latitude\n        longitude\n        media {\n            key\n            type\n        }\n        user {\n            id\n            name {\n                lastName\n                firstName\n            }\n            username\n            picture\n        }\n    }\n    }"): (typeof documents)["\nmutation updatePing($id: ObjectID! $UPingInput: UPingInput!) {\n    updatePing(id: $id, payload: $UPingInput) {\n        id\n        createdAt\n        title\n        description\n        picks\n        latitude\n        longitude\n        media {\n            key\n            type\n        }\n        user {\n            id\n            name {\n                lastName\n                firstName\n            }\n            username\n            picture\n        }\n    }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateUser($payload: UpdateUserInput!) {\n  updateUser(payload: $payload) {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n"): (typeof documents)["\n  mutation UpdateUser($payload: UpdateUserInput!) {\n  updateUser(payload: $payload) {\n    ... on User {\n      id\n      email\n      username\n      name {\n        firstName\n        lastName\n        middleName\n      }\n      picture\n      createdAt\n      picks\n      activityCount\n      devices\n    }\n    ... on NotFoundError {\n      message\n    }\n    ... on UnknownError {\n      message\n    }\n    ... on InternalServerError {\n      message\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPingsWithinRadius($payload: UPingsWithinRadiusInput!, $first: Int!, $picks: [String], $after: String) {\n  getPingsWithinRadius(payload: $payload, first: $first, picks: $picks, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        picks\n        user {\n          id\n          username\n          name {\n            firstName\n            lastName\n            middleName\n          }\n          email\n          picture\n          picks\n        }\n        description\n        createdAt\n        latitude\n        longitude\n        media {\n          key\n          type\n        }\n        radius\n        title\n        url\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n  }\n}\n\n  "): (typeof documents)["\n  query GetPingsWithinRadius($payload: UPingsWithinRadiusInput!, $first: Int!, $picks: [String], $after: String) {\n  getPingsWithinRadius(payload: $payload, first: $first, picks: $picks, after: $after) {\n    edges {\n      cursor\n      node {\n        id\n        picks\n        user {\n          id\n          username\n          name {\n            firstName\n            lastName\n            middleName\n          }\n          email\n          picture\n          picks\n        }\n        description\n        createdAt\n        latitude\n        longitude\n        media {\n          key\n          type\n        }\n        radius\n        title\n        url\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n  }\n}\n\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;