import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
<div>
    <NavBar/>
    <ItemListContainer greetings ="Bienvenidos a " greetings1="STADIUM" />

</div>
  );
}

export default App;