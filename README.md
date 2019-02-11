# How to add a GraphQL Query/Mutation
We are using *GraphQL-Yoga* between the frontend and the Prisma-server. GraphQL-Yoga needs a **Schema Definition Language** (SDL) and the corresponding resolvers. Therefore to add a query/ mutation we have to:
- add query/ mutation to SDL in `./SDL.js`
- add resolver to `./index.js`, make sure that the function returns the values defined in the SDL

# Test
In `./test` I prepared a node application, which exposes the graphql-server and the **playground** at port **4001**. To start the offline serverless test server execute:
- `cd ./test && yarn start`
Then open a browser at [http://localhost:4001] to make tests in the playground.
Note: The *GraphQLServerLambda* from *graphql-yoga* does not support the playground at the moment (I could not get it running, even though I still export it). (10.02.2018)

# Publish
- `yarn publish` enter new version number and npm credentials. Remember to update `alda-backup` repository.

## AWS Lightsail
- start 1024MB RAM, Ubuntu 16.04 instance
- install docker and docker-compose
- `git clone https://github.com/aldabot/alda-graphql-server`
- `cd ./alda-graphql-server/docker`
- `sudo docker-compose up`
- attach a fixed IP to the AWS Lightsail instance
- open port 3306 (MySQL) and 4466 (Prisma) in the AWS Lightsail Network menu
Now we have to deploy the schema from our **local computer** (not from the AWS Lightsail instance)
- in the same repository go to `cd ./database`
- change the prisma endpoint to `http://{AWSLightsailStaticIp}:4466`
- `prisma deploy`

# Dependencies
This is the source code of the npm package **alda-graphql-server**. The following repositories depend on it
- **alda-backend**


