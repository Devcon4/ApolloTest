const { ApolloServer, gql } = require('apollo-server');

const books = [
    {
        title: 'Book V1',
        author: 'John Doe'
    },
    {
        title: 'Book V2',
        author: 'John Smith'
    }
];

const typeDefs = gql`
    type Book {
        title: String,
        author: String
    }

    type Query AllBooks {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => books,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    engine: {
        apiKey: "service:Devcon4-4049:Az-XT7f1dPR1UYmj3jJ03Q"
    }
});

server.listen().then(({url}) => {
    console.log(`Server up! ${url}`);
})