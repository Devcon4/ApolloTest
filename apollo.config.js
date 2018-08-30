module.exports = {
    schemas: {
        PrimaryBackend: {
            engineKey: "service:Devcon4-4049:Az-XT7f1dPR1UYmj3jJ03Q"
        }
    },
    queries: [
        {
            schema: "PrimaryBackend",
            includes: [ "**/*.ts", "**/*.js" ],
            excludes: [ "ApolloTest/node_modules/**", "server/node_modules/**", "shared/schema/**" ]
        }
    ]
}
