import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
function App() {

  return (
          <>
          <NavBar/>
          <ItemListContainer
          greeting="Lista de productos"
          />          
          </>
  );
}

export default App;
