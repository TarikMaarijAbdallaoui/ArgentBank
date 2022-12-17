import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
      <Header />

      <Main>
        <Hero />
        <Features />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
