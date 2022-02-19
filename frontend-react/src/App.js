import "./App.scss";
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
