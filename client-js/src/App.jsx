import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import BookList from './components/BookList'
import Form from './components/Form'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


const App = () =>{
  return (
    <ApolloProvider client={client}>
      <BookList />
      <Form className="absolute bottom-0" />
    </ApolloProvider>
  )
}

export default App
