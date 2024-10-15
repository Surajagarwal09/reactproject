import './App.css';
import ProductCard from './components/ProductCard'
function App() {
  const products = [{ name: "iphone16", price: 150000, manufacturer: "Apple", stocks: 40 },
                    { name: "Tesla Model S", price: 9000000, manufacturer: "Tesla", stocks: 15 },
                    {name:"samsung s24",price:12500, manufacturer: "samsung",stocks:100},
                    {name:"bag",price:1500, manufacturer: "fasttrack",stocks:100},
  ]
  return (
    <div className="app">
      {products.map((product) => {
        return (<ProductCard props={product} />)
      })}
    </div>
  );
}

export default App;