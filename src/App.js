import './App.css';
import Intro from './components/intro/Intro';
import ProductPage from './components/product/Products';
import Header from './Header';
import Landing from './Landing';

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <ProductPage></ProductPage>
      <Intro></Intro>
    </div>
  );
}

export default App;