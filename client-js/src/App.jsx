import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


const App = () =>{
  return (
    <ApolloProvider client={client}>
      Hello world!
    </ApolloProvider>
  )
}

export default App
