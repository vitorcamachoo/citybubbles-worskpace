import { GraphQLClient } from "graphql-request";
import { getSdk } from "./__generated__";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}?access_token=${CONTENTFUL_ACCESS_TOKEN}`;
const client = new GraphQLClient(endpoint);

export default getSdk(client);
