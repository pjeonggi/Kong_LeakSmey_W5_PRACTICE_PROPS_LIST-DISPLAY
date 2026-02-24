import items from "./components/items.jsx";
import { AVAILABLE_ITEMS } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>
      <main>
        <ul className="items-list">
          {AVAILABLE_ITEMS.map(item => (
            <Items key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
