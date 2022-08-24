import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Graph from './components/Graph';
import SalesDisplay from './components/SalesDisplay';
import Main from './components/Main';
import { Flex } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Flex>
        <Sidebar/>
        <Main/>
      </Flex>
    </div>
  );
}

export default App;
