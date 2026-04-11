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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}": typeof types.GetNewTokensDocument,
    "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}": typeof types.LoginDocument,
    "mutation Logout {\n  logout\n}": typeof types.LogoutDocument,
    "query Me {\n  me {\n    id\n    email\n    role\n  }\n}": typeof types.MeDocument,
    "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}": typeof types.RegisterDocument,
    "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}": typeof types.RequestPasswordResetDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": typeof types.ResetPasswordDocument,
    "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}": typeof types.VerifyEmailDocument,
    "query GetProfile {\n  me {\n    id\n    email\n    avatarUrl\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": typeof types.GetProfileDocument,
    "mutation UpdateProfile($data: UserUpdateCustomInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": typeof types.UpdateProfileDocument,
    "query GetRecipes($input: RecipesQueryInput!) {\n  recipes(input: $input) {\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    likes\n    views\n    mealType\n  }\n}": typeof types.GetRecipesDocument,
};
const documents: Documents = {
    "query GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}": types.GetNewTokensDocument,
    "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "query Me {\n  me {\n    id\n    email\n    role\n  }\n}": types.MeDocument,
    "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}": types.RegisterDocument,
    "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}": types.RequestPasswordResetDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": types.ResetPasswordDocument,
    "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}": types.VerifyEmailDocument,
    "query GetProfile {\n  me {\n    id\n    email\n    avatarUrl\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": types.GetProfileDocument,
    "mutation UpdateProfile($data: UserUpdateCustomInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": types.UpdateProfileDocument,
    "query GetRecipes($input: RecipesQueryInput!) {\n  recipes(input: $input) {\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    likes\n    views\n    mealType\n  }\n}": types.GetRecipesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}"): (typeof documents)["query GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}"): (typeof documents)["mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    email\n    role\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    email\n    role\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}"): (typeof documents)["mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}"): (typeof documents)["mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}"): (typeof documents)["mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}"): (typeof documents)["mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProfile {\n  me {\n    id\n    email\n    avatarUrl\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"): (typeof documents)["query GetProfile {\n  me {\n    id\n    email\n    avatarUrl\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateProfile($data: UserUpdateCustomInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"): (typeof documents)["mutation UpdateProfile($data: UserUpdateCustomInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRecipes($input: RecipesQueryInput!) {\n  recipes(input: $input) {\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    likes\n    views\n    mealType\n  }\n}"): (typeof documents)["query GetRecipes($input: RecipesQueryInput!) {\n  recipes(input: $input) {\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    likes\n    views\n    mealType\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;