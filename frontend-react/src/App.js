import "./App.scss";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import {
  Header,
  About,
  Footer,
  Skills,
  Testimonials,
  Work,
} from "./containers";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
