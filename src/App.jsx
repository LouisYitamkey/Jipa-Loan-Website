import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import Navbar from "./components/NavBar";
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

        <div className={`${styles.flexStart} ${styles.paddingX}  bg-slate-200`}>
          <div className={`${styles.boxWidth} `}></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
