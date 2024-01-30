import Article from "./Components/Articles/Article";
import Header from "./Components/Header/header";
import Intro from "./Components/intro/Intro";
import Service from "./Components/Services/Service";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Service />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
