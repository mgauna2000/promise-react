
import './App.css';
import { CardList } from './components/CardList/CardList';
// import Item from './components/Item/Item';
// import Item from './components/Item/Item';
// import ItemCount from './components/ItemCount/ItemCount';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
          <CardList/>
          {/* <Item/> */}
    </div>
  );
}

export default App;
