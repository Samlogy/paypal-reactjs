import React, { useState } from "react";

import Paypal from "./components/Paypal"
import "./App.css";

const App = () => {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App">
      { checkout ? <Paypal /> : <button onClick={() => setCheckOut(true) }> Checkout </button> }
    </div>
  );
}

export default App;