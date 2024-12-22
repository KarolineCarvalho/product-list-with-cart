import Card from "./components/Card";
import Cart from "./components/Cart";
import "./styles/global.css";
import "./styles/App.css";
import { data } from "./data/data";

function App() {
  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <h1 className="title">Desserts</h1>
        <div className="dessertsContainer">
          {data.map((item) => {
            return (
              <Card
                key={item.name}
                CardImage={{ image: item.image, altText: `${item.name}` }}
                Button={{
                  buttonText: "Add to Cart",
                  isChangeQnty: false,
                  type: "default",
                }}
                itemInfo={{
                  category: item.category,
                  name: item.name,
                  price: item.price,
                }}
              />
            );
          })}
        </div>
      </div>
      <Cart itemsQnty={2} />
    </div>
  );
}

export default App;
