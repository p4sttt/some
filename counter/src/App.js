import React, {useState} from "react";
import {motion} from "framer-motion";
import AppStyle from "./AppStyle.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      className="App"
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay:0.1, ease: "easeOut"}}
    >
      <h1>{count}</h1>
      <div className="buttonsBlock">
        <motion.button
          className="decrement"
          onClick={() => setCount(prevState => prevState - 1)}
          whileHover={{}}
          whileTap={{boxShadow: 0, y: 4}}
        >- Минус</motion.button>
        <motion.button
          className="increment"
          onClick={() => setCount(prevState => prevState + 1)}
          whileHover={{}}
          whileTap={{boxShadow: 0, y: 4}}
        >Плюс +</motion.button>
      </div>
    </motion.div>
  );
}

export default App;
