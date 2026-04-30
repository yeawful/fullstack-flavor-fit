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
    "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}": typeof types.LoginDocument,
    "mutation Logout {\n  logout\n}": typeof types.LogoutDocument,
    "query Me {\n  me {\n    id\n    email\n    role\n    avatarUrl\n    profile {\n      fullName\n    }\n  }\n}": typeof types.MeDocument,
    "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}": typeof types.RegisterDocument,
    "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}": typeof types.RequestPasswordResetDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": typeof types.ResetPasswordDocument,
    "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}": typeof types.VerifyEmailDocument,
    "mutation createOrder($input: OrderCreateInput!) {\n  createOrder(input: $input) {\n    id\n    orderId\n    total\n    status\n    createdAt\n    items {\n      id\n      quantity\n      price\n      ingredient {\n        id\n        name\n        price\n        iconUrl\n      }\n    }\n  }\n}": typeof types.CreateOrderDocument,
    "query GetRandomRecipe {\n  randomRecipe {\n    id\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    mealType\n    likes\n    views\n    recipeIngredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        iconUrl\n        price\n      }\n    }\n  }\n}": typeof types.GetRandomRecipeDocument,
    "query GetMyOrders {\n  myOrders {\n    orderId\n    status\n    total\n    createdAt\n  }\n}": typeof types.GetMyOrdersDocument,
    "query GetByOrderId($orderId: String!) {\n  getByOrderId(orderId: $orderId) {\n    id\n    orderId\n    total\n    status\n    createdAt\n    items {\n      id\n      quantity\n      price\n      ingredient {\n        id\n        name\n        price\n        iconUrl\n      }\n    }\n  }\n}": typeof types.GetByOrderIdDocument,
    "query GetProfile {\n  me {\n    id\n    email\n    avatarUrl\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": typeof types.GetProfileDocument,
    "mutation UpdateProfile($data: UserUpdateCustomInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": typeof types.UpdateProfileDocument,
    "mutation AddNewCommemt($input: CommentCreateInput!) {\n  createComment(input: $input) {\n    id\n    content\n    createdAt\n    author {\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}": typeof types.AddNewCommemtDocument,
    "query GetRecipeBySlug($slug: String!) {\n  recipeBySlug(slug: $slug) {\n    id\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    mealType\n    likes\n    views\n    author {\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n    tags {\n      name\n    }\n    recipeIngredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        iconUrl\n        price\n      }\n    }\n    recipeSteps {\n      id\n      title\n      description\n      image\n    }\n    nutritionFact {\n      carbohydrates\n      fats\n      proteins\n      fiber\n    }\n    comments {\n      id\n      content\n      createdAt\n      author {\n        avatarUrl\n        profile {\n          fullName\n        }\n      }\n    }\n  }\n}": typeof types.GetRecipeBySlugDocument,
    "query GetRecipes($input: RecipesQueryInput!) {\n  recipes(input: $input) {\n    hasMore\n    total\n    items {\n      image\n      title\n      description\n      slug\n      calories\n      cookingTime\n      difficulty\n      likes\n      views\n      mealType\n    }\n  }\n}": typeof types.GetRecipesDocument,
};
const documents: Documents = {
    "query GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}": types.GetNewTokensDocument,
    "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "query Me {\n  me {\n    id\n    email\n    role\n    avatarUrl\n    profile {\n      fullName\n    }\n  }\n}": types.MeDocument,
    "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}": types.RegisterDocument,
    "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestPasswordReset(data: $data)\n}": types.RequestPasswordResetDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": types.ResetPasswordDocument,
    "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}": types.VerifyEmailDocument,
    "mutation createOrder($input: OrderCreateInput!) {\n  createOrder(input: $input) {\n    id\n    orderId\n    total\n    status\n    createdAt\n    items {\n      id\n      quantity\n      price\n      ingredient {\n        id\n        name\n        price\n        iconUrl\n      }\n    }\n  }\n}": types.CreateOrderDocument,
    "query GetRandomRecipe {\n  randomRecipe {\n    id\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    mealType\n    likes\n    views\n    recipeIngredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        iconUrl\n        price\n      }\n    }\n  }\n}": types.GetRandomRecipeDocument,
    "query GetMyOrders {\n  myOrders {\n    orderId\n    status\n    total\n    createdAt\n  }\n}": types.GetMyOrdersDocument,
    "query GetByOrderId($orderId: String!) {\n  getByOrderId(orderId: $orderId) {\n    id\n    orderId\n    total\n    status\n    createdAt\n    items {\n      id\n      quantity\n      price\n      ingredient {\n        id\n        name\n        price\n        iconUrl\n      }\n    }\n  }\n}": types.GetByOrderIdDocument,
    "query GetProfile {\n  me {\n    id\n    email\n    avatarUrl\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": types.GetProfileDocument,
    "mutation UpdateProfile($data: UserUpdateCustomInput!) {\n  updateProfile(data: $data) {\n    id\n    email\n    profile {\n      fullName\n      gender\n      age\n      bio\n    }\n    measurements {\n      heightCm\n      weightKg\n      goalWeightKg\n      chestCm\n      waistCm\n      thighCm\n      armCm\n      activityLevel\n      nutritionGoal\n    }\n  }\n}": types.UpdateProfileDocument,
    "mutation AddNewCommemt($input: CommentCreateInput!) {\n  createComment(input: $input) {\n    id\n    content\n    createdAt\n    author {\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}": types.AddNewCommemtDocument,
    "query GetRecipeBySlug($slug: String!) {\n  recipeBySlug(slug: $slug) {\n    id\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    mealType\n    likes\n    views\n    author {\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n    tags {\n      name\n    }\n    recipeIngredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        iconUrl\n        price\n      }\n    }\n    recipeSteps {\n      id\n      title\n      description\n      image\n    }\n    nutritionFact {\n      carbohydrates\n      fats\n      proteins\n      fiber\n    }\n    comments {\n      id\n      content\n      createdAt\n      author {\n        avatarUrl\n        profile {\n          fullName\n        }\n      }\n    }\n  }\n}": types.GetRecipeBySlugDocument,
    "query GetRecipes($input: RecipesQueryInput!) {\n  recipes(input: $input) {\n    hasMore\n    total\n    items {\n      image\n      title\n      description\n      slug\n      calories\n      cookingTime\n      difficulty\n      likes\n      views\n      mealType\n    }\n  }\n}": types.GetRecipesDocument,
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
export function graphql(source: "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}"): (typeof documents)["mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    email\n    role\n    avatarUrl\n    profile {\n      fullName\n    }\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    email\n    role\n    avatarUrl\n    profile {\n      fullName\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}"): (typeof documents)["mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}"];
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
export function graphql(source: "mutation createOrder($input: OrderCreateInput!) {\n  createOrder(input: $input) {\n    id\n    orderId\n    total\n    status\n    createdAt\n    items {\n      id\n      quantity\n      price\n      ingredient {\n        id\n        name\n        price\n        iconUrl\n      }\n    }\n  }\n}"): (typeof documents)["mutation createOrder($input: OrderCreateInput!) {\n  createOrder(input: $input) {\n    id\n    orderId\n    total\n    status\n    createdAt\n    items {\n      id\n      quantity\n      price\n      ingredient {\n        id\n        name\n        price\n        iconUrl\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRandomRecipe {\n  randomRecipe {\n    id\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    mealType\n    likes\n    views\n    recipeIngredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        iconUrl\n        price\n      }\n    }\n  }\n}"): (typeof documents)["query GetRandomRecipe {\n  randomRecipe {\n    id\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    mealType\n    likes\n    views\n    recipeIngredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        iconUrl\n        price\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMyOrders {\n  myOrders {\n    orderId\n    status\n    total\n    createdAt\n  }\n}"): (typeof documents)["query GetMyOrders {\n  myOrders {\n    orderId\n    status\n    total\n    createdAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetByOrderId($orderId: String!) {\n  getByOrderId(orderId: $orderId) {\n    id\n    orderId\n    total\n    status\n    createdAt\n    items {\n      id\n      quantity\n      price\n      ingredient {\n        id\n        name\n        price\n        iconUrl\n      }\n    }\n  }\n}"): (typeof documents)["query GetByOrderId($orderId: String!) {\n  getByOrderId(orderId: $orderId) {\n    id\n    orderId\n    total\n    status\n    createdAt\n    items {\n      id\n      quantity\n      price\n      ingredient {\n        id\n        name\n        price\n        iconUrl\n      }\n    }\n  }\n}"];
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
export function graphql(source: "mutation AddNewCommemt($input: CommentCreateInput!) {\n  createComment(input: $input) {\n    id\n    content\n    createdAt\n    author {\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}"): (typeof documents)["mutation AddNewCommemt($input: CommentCreateInput!) {\n  createComment(input: $input) {\n    id\n    content\n    createdAt\n    author {\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRecipeBySlug($slug: String!) {\n  recipeBySlug(slug: $slug) {\n    id\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    mealType\n    likes\n    views\n    author {\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n    tags {\n      name\n    }\n    recipeIngredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        iconUrl\n        price\n      }\n    }\n    recipeSteps {\n      id\n      title\n      description\n      image\n    }\n    nutritionFact {\n      carbohydrates\n      fats\n      proteins\n      fiber\n    }\n    comments {\n      id\n      content\n      createdAt\n      author {\n        avatarUrl\n        profile {\n          fullName\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetRecipeBySlug($slug: String!) {\n  recipeBySlug(slug: $slug) {\n    id\n    image\n    title\n    description\n    slug\n    calories\n    cookingTime\n    difficulty\n    mealType\n    likes\n    views\n    author {\n      avatarUrl\n      profile {\n        fullName\n      }\n    }\n    tags {\n      name\n    }\n    recipeIngredients {\n      quantity\n      unit\n      ingredient {\n        id\n        name\n        iconUrl\n        price\n      }\n    }\n    recipeSteps {\n      id\n      title\n      description\n      image\n    }\n    nutritionFact {\n      carbohydrates\n      fats\n      proteins\n      fiber\n    }\n    comments {\n      id\n      content\n      createdAt\n      author {\n        avatarUrl\n        profile {\n          fullName\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRecipes($input: RecipesQueryInput!) {\n  recipes(input: $input) {\n    hasMore\n    total\n    items {\n      image\n      title\n      description\n      slug\n      calories\n      cookingTime\n      difficulty\n      likes\n      views\n      mealType\n    }\n  }\n}"): (typeof documents)["query GetRecipes($input: RecipesQueryInput!) {\n  recipes(input: $input) {\n    hasMore\n    total\n    items {\n      image\n      title\n      description\n      slug\n      calories\n      cookingTime\n      difficulty\n      likes\n      views\n      mealType\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;