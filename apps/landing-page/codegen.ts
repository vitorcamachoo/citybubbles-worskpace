import type { CodegenConfig } from "@graphql-codegen/cli";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

const config: CodegenConfig = {
  overwrite: true,
  schema: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}?access_token=${CONTENTFUL_ACCESS_TOKEN}`,
  documents: ["./app/sdk/**/*.graphql"],
  generates: {
    "./app/sdk/contentful/__generated__/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        fetcher: fetch,
      },
    },
    "./app/sdk/contentful/__generated__/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
