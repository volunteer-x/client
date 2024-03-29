/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
  EmailAddress: { input: string; output: string; }
  Latitude: { input: string; output: string; }
  Longitude: { input: string | number; output: string | number; }
  ObjectID: { input: string; output: string; }
  URL: { input: URL | string; output: URL | string; }
};

/** Represents the base error interface. */
export type BaseError = {
  /** The error message. */
  message: Scalars['String']['output'];
};

export type CreatePingInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Latitude']['input'];
  longitude: Scalars['Longitude']['input'];
  picks: Array<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['URL']['input']>;
  userID: Scalars['ObjectID']['input'];
};

export type CreateUserInput = {
  device: Scalars['String']['input'];
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  latitude?: InputMaybe<Scalars['Latitude']['input']>;
  longitude?: InputMaybe<Scalars['Longitude']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  picks: Array<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

/** Represents a forbidden error. */
export type ForbiddenError = BaseError & {
  __typename?: 'ForbiddenError';
  /** The error message. */
  message: Scalars['String']['output'];
};

export type GetParticipantsResponse = {
  __typename?: 'GetParticipantsResponse';
  members?: Maybe<Array<User>>;
  totalCount: Scalars['Int']['output'];
};

/** Represents an internal server error. */
export type InternalServerError = BaseError & {
  __typename?: 'InternalServerError';
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Represents an invalid input error. */
export type InvalidInputError = BaseError & {
  __typename?: 'InvalidInputError';
  /** The error message. */
  message: Scalars['String']['output'];
};

export type Media = {
  __typename?: 'Media';
  key: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type MediaInput = {
  key: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addParticipant: Scalars['Boolean']['output'];
  createPing: Ping;
  /** Create a new user. */
  createUser: UserPayload;
  removeParticipant: Scalars['String']['output'];
  /** Remove a user from the system. Requires authentication. */
  removeUser?: Maybe<User>;
  updatePing: Ping;
  /** Update an existing user. Requires authentication. */
  updateUser: UserPayload;
};


export type MutationAddParticipantArgs = {
  id: Scalars['ObjectID']['input'];
  userID: Scalars['ObjectID']['input'];
};


export type MutationCreatePingArgs = {
  payload: CreatePingInput;
};


export type MutationCreateUserArgs = {
  payload: CreateUserInput;
};


export type MutationRemoveParticipantArgs = {
  id: Scalars['ObjectID']['input'];
  userID: Scalars['ObjectID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationUpdatePingArgs = {
  id: Scalars['ObjectID']['input'];
  payload: UPingInput;
};


export type MutationUpdateUserArgs = {
  payload: UpdateUserInput;
};

/** Represents a name. */
export type Name = {
  __typename?: 'Name';
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
};

/** Represents a not found error. */
export type NotFoundError = BaseError & {
  __typename?: 'NotFoundError';
  /** The error message. */
  message: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Ping = {
  __typename?: 'Ping';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectID']['output'];
  latitude: Scalars['Latitude']['output'];
  longitude: Scalars['Longitude']['output'];
  media?: Maybe<Array<Maybe<Media>>>;
  participants?: Maybe<Array<Maybe<User>>>;
  picks: Array<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['URL']['output']>;
  user?: Maybe<User>;
  userID: Scalars['ID']['output'];
};

export type PingConnection = {
  __typename?: 'PingConnection';
  edges: Array<PingEdge>;
  owner?: Maybe<User>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PingEdge = {
  __typename?: 'PingEdge';
  cursor: Scalars['String']['output'];
  node: Ping;
};

export type Query = {
  __typename?: 'Query';
  getAllPing: PingConnection;
  getParticipants: GetParticipantsResponse;
  getPing: Ping;
  getPingsWithinRadius?: Maybe<PingConnection>;
  /** Check if a username is available. */
  isUsernameAvailable: Scalars['Boolean']['output'];
  /** Get the current user. Requires authentication. */
  user: UserPayload;
  /** Get a user by id. */
  userById: UserPayload;
};


export type QueryGetAllPingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  userID?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  pingID: Scalars['ObjectID']['input'];
};


export type QueryGetPingArgs = {
  id: Scalars['ObjectID']['input'];
};


export type QueryGetPingsWithinRadiusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  payload: UPingsWithinRadiusInput;
  picks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryIsUsernameAvailableArgs = {
  username: Scalars['String']['input'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ObjectID']['input'];
};

export type UPingInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Latitude']['input']>;
  longitude?: InputMaybe<Scalars['Longitude']['input']>;
  media?: InputMaybe<Array<InputMaybe<MediaInput>>>;
  picks?: InputMaybe<Array<Scalars['String']['input']>>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['URL']['input']>;
};

export type UPingsWithinRadiusInput = {
  latitude: Scalars['Latitude']['input'];
  longitude: Scalars['Longitude']['input'];
  radius: Scalars['Float']['input'];
};

/** Represents an unauthorized error. */
export type UnauthorizedError = BaseError & {
  __typename?: 'UnauthorizedError';
  /** The error message. */
  message: Scalars['String']['output'];
};

/** Represents an unknown error. */
export type UnknownError = BaseError & {
  __typename?: 'UnknownError';
  /** The error message. */
  message: Scalars['String']['output'];
};

export type UpdateUserInput = {
  devices?: InputMaybe<Array<Scalars['String']['input']>>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ObjectID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Latitude']['input']>;
  longitude?: InputMaybe<Scalars['Longitude']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  picks?: InputMaybe<Array<Scalars['String']['input']>>;
  picture?: InputMaybe<Scalars['String']['input']>;
  pings?: InputMaybe<Array<Scalars['String']['input']>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a user in the system. */
export type User = {
  __typename?: 'User';
  /** The number of activities joined by the user. */
  activityCount?: Maybe<Scalars['Int']['output']>;
  /** The date and time when the user was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The list of devices associated with the user. */
  devices?: Maybe<Array<Scalars['String']['output']>>;
  /** The email address of the user. */
  email: Scalars['EmailAddress']['output'];
  /** The unique identifier of the user. */
  id: Scalars['ObjectID']['output'];
  /** The name of the user. */
  name?: Maybe<Name>;
  /** The list of picks made by the user. */
  picks: Array<Scalars['String']['output']>;
  /** The profile picture of the user. */
  picture?: Maybe<Scalars['String']['output']>;
  /** The list of pings received by the user. */
  pings?: Maybe<Array<Maybe<Ping>>>;
  /** The username of the user. */
  username: Scalars['String']['output'];
};

/** The payload for the user. */
export type UserPayload = InternalServerError | NotFoundError | UnknownError | User;

export type AddParticipantMutationVariables = Exact<{
  activityID: Scalars['ObjectID']['input'];
  userId: Scalars['ObjectID']['input'];
}>;


export type AddParticipantMutation = { __typename?: 'Mutation', addParticipant: boolean };

export type GetAllPingQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllPingQuery = { __typename?: 'Query', getAllPing: { __typename?: 'PingConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'PingEdge', cursor: string, node: { __typename?: 'Ping', id: string, title: string, description?: string | null, createdAt?: Date | string | null, latitude: string, longitude: string | number, picks: Array<string>, radius?: number | null, url?: URL | string | null, media?: Array<{ __typename?: 'Media', key: string, type: string } | null> | null } }>, owner?: { __typename?: 'User', id: string, createdAt?: Date | string | null, username: string, email: string, picture?: string | null, picks: Array<string>, name?: { __typename?: 'Name', firstName: string, lastName: string, middleName?: string | null } | null } | null } };

export type GetParticipantsQueryVariables = Exact<{
  activityId: Scalars['ObjectID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetParticipantsQuery = { __typename?: 'Query', getParticipants: { __typename?: 'GetParticipantsResponse', totalCount: number, members?: Array<{ __typename?: 'User', id: string, username: string, picture?: string | null, name?: { __typename?: 'Name', firstName: string, lastName: string, middleName?: string | null } | null }> | null } };

export type CreateUserMutationVariables = Exact<{
  payload: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'InternalServerError', message: string } | { __typename?: 'NotFoundError', message: string } | { __typename?: 'UnknownError', message: string } | { __typename?: 'User', id: string, email: string, username: string, picture?: string | null, createdAt?: Date | string | null, picks: Array<string>, activityCount?: number | null, devices?: Array<string> | null, name?: { __typename?: 'Name', firstName: string, lastName: string, middleName?: string | null } | null } };

export type IsUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type IsUsernameAvailableQuery = { __typename?: 'Query', isUsernameAvailable: boolean };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'InternalServerError', message: string } | { __typename?: 'NotFoundError', message: string } | { __typename?: 'UnknownError', message: string } | { __typename?: 'User', id: string, email: string, username: string, picture?: string | null, createdAt?: Date | string | null, picks: Array<string>, activityCount?: number | null, devices?: Array<string> | null, name?: { __typename?: 'Name', firstName: string, lastName: string, middleName?: string | null } | null } };

export type CreatePingMutationVariables = Exact<{
  createPingInput: CreatePingInput;
}>;


export type CreatePingMutation = { __typename?: 'Mutation', createPing: { __typename?: 'Ping', id: string } };

export type UpdatePingMutationVariables = Exact<{
  id: Scalars['ObjectID']['input'];
  UPingInput: UPingInput;
}>;


export type UpdatePingMutation = { __typename?: 'Mutation', updatePing: { __typename?: 'Ping', id: string, createdAt?: Date | string | null, title: string, description?: string | null, picks: Array<string>, latitude: string, longitude: string | number, media?: Array<{ __typename?: 'Media', key: string, type: string } | null> | null, user?: { __typename?: 'User', id: string, username: string, picture?: string | null, name?: { __typename?: 'Name', lastName: string, firstName: string } | null } | null } };

export type UpdateUserMutationVariables = Exact<{
  payload: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'InternalServerError', message: string } | { __typename?: 'NotFoundError', message: string } | { __typename?: 'UnknownError', message: string } | { __typename?: 'User', id: string, email: string, username: string, picture?: string | null, createdAt?: Date | string | null, picks: Array<string>, activityCount?: number | null, devices?: Array<string> | null, name?: { __typename?: 'Name', firstName: string, lastName: string, middleName?: string | null } | null } };

export type GetPingsWithinRadiusQueryVariables = Exact<{
  payload: UPingsWithinRadiusInput;
  first: Scalars['Int']['input'];
  picks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPingsWithinRadiusQuery = { __typename?: 'Query', getPingsWithinRadius?: { __typename?: 'PingConnection', totalCount?: number | null, edges: Array<{ __typename?: 'PingEdge', cursor: string, node: { __typename?: 'Ping', id: string, picks: Array<string>, description?: string | null, createdAt?: Date | string | null, latitude: string, longitude: string | number, radius?: number | null, title: string, url?: URL | string | null, user?: { __typename?: 'User', id: string, username: string, email: string, picture?: string | null, picks: Array<string>, name?: { __typename?: 'Name', firstName: string, lastName: string, middleName?: string | null } | null } | null, media?: Array<{ __typename?: 'Media', key: string, type: string } | null> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };


export const AddParticipantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddParticipant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activityID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addParticipant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activityID"}}},{"kind":"Argument","name":{"kind":"Name","value":"userID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<AddParticipantMutation, AddParticipantMutationVariables>;
export const GetAllPingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllPing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"picks"}},{"kind":"Field","name":{"kind":"Name","value":"radius"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"picks"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPingQuery, GetAllPingQueryVariables>;
export const GetParticipantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetParticipants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getParticipants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pingID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetParticipantsQuery, GetParticipantsQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"picks"}},{"kind":"Field","name":{"kind":"Name","value":"activityCount"}},{"kind":"Field","name":{"kind":"Name","value":"devices"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalServerError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const IsUsernameAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"isUsernameAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isUsernameAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}]}}]} as unknown as DocumentNode<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"picks"}},{"kind":"Field","name":{"kind":"Name","value":"activityCount"}},{"kind":"Field","name":{"kind":"Name","value":"devices"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalServerError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const CreatePingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPingInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPingInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePingMutation, CreatePingMutationVariables>;
export const UpdatePingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"UPingInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UPingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"UPingInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"picks"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePingMutation, UpdatePingMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"picks"}},{"kind":"Field","name":{"kind":"Name","value":"activityCount"}},{"kind":"Field","name":{"kind":"Name","value":"devices"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NotFoundError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalServerError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetPingsWithinRadiusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPingsWithinRadius"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UPingsWithinRadiusInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"picks"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPingsWithinRadius"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"picks"},"value":{"kind":"Variable","name":{"kind":"Name","value":"picks"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picks"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"picks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"radius"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetPingsWithinRadiusQuery, GetPingsWithinRadiusQueryVariables>;