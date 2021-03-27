import { createReactClient } from "@gqless/react";
import { createClient, QueryFetcher } from "gqless";
import { createLogger } from "@gqless/logger";
import {
  GeneratedSchema,
  generatedSchema,
  scalarsEnumsHash,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";

// https://graphql.org/swapi-graphql
const url = "https://swapi-graphql.netlify.app/.netlify/functions/index";

const queryFetcher: QueryFetcher = async function (query, variables) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
  });

  const json = await response.json();

  return json;
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

createLogger(client).start();

export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
} = client;

export const {
  graphql,
  useQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export * from "./schema.generated";
