import "./App.css";
import { Nav, NavInfo, MyTech, Card, Footer } from "./Components/Index";

function App() {
  return (
    <div className="App">
      <div className="NavInfo w-full sm:h-[100vh] h-[80vh]">
        <Nav />
        <NavInfo />
      </div>
      <MyTech />
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
