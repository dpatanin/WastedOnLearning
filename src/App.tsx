import { ChakraProvider, Icon, Link } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <ChakraProvider>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Link href="https://github.com/dpatanin/WastedOnLearning" isExternal>
        <Icon
          as={VscGithub}
          pos="absolute"
          top="2.5"
          right="2.5"
          boxSize="8"
          color="white"
        />
      </Link>
      <Main />
    </ChakraProvider>
  );
}

export default App;
