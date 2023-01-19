import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Main from './Main';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <Main />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
