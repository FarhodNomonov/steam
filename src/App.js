import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import "./assets/styles/app.css";
import "./assets/styles/media.css";
function App() {
  return (
    <div className="App">
      <div className="container-main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
