import React, { useState, useEffect } from "react";
import axios from "axios";

import Input from "./components/input/input";
import OptionsList from "./components/Options/OptionsList";
import "./App.css";

interface IOptions {
  data: [string];
}

function App() {
  const [options, setOptions] = useState<Array<string>>([]);

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    axios
      .get<IOptions>(`http://localhost:3001/autocomplete/${query}`)
      .then(({ data }) => {
        setOptions(data);
      });
  }, [query]);

  return (
    <div className="App">
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
      />
      <OptionsList options={options} />
    </div>
  );
}

export default App;
