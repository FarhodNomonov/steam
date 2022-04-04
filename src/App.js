import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
