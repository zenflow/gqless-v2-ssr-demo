/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: "string" },
  preImport: "",
  introspection: {
    endpoint: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    headers: {},
  },
  destination: "./gqless/index.ts",
  subscriptions: false,
};

module.exports = config;
