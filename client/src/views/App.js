import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios('http://localhost:5000/api');
      setData(response.data);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <div>
      <h1>Hello from React!</h1>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
};

export default App;
