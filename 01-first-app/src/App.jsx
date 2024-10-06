import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <div className="card">
      <Cards title="Title 1" desc="Card Desc 1"/>
      <Cards title="Title 2" desc="Card Desc 2"/>
      <Cards title="Title 3" desc="Card Desc 3"/>
      <Cards title="Title 4" desc="Card Desc 4"/>
        </div> 
      <Footer />
    </>
  );
}

export default App;
