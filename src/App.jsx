import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={ <Hero/> } />
        </Routes>

      
      </div>
    </BrowserRouter>
  );
}

export default App;
