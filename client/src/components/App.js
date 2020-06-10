import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios("http://localhost:5000/api");
      setData(response.data);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <div>
      <h1>Hello from React!</h1>
      {/* <pre>{data}</pre> */}
    </div>
  );
};

export default App;
