# Setup

# How to add a GraphQL Query/Mutation
We are using *GraphQL-Yoga* between the frontend and the Prisma-server. GraphQL-Yoga needs a **Schema Definition Language** (SDL) and the corresponding resolvers. Therefore to add a query/ mutation we have to:
- add query/ mutation to SDL in `./schema.js`
- add resolver to `./index.js`, make sure that the function returns the values defined in the SDL

# Test
In `./test` I prepared a serverless application, which exposes the graphql-server and the **playground** at port **4001**. To start the offline serverless test server execute:
- `cd ./test`
- `sls offline`
Then open a browser at [http://localhost:4001] to make tests in the playground.

# Publish
- `yarn publish` enter new version number and npm credentials. Remember to update `alda-backup` repository.

# Dependencies
This is the source code of the npm package **alda-graphql-server**. The following repositories depend on it
- **alda-backend**


