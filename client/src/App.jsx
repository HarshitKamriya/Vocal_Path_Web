import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  const fetchHealthStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/health"
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Backend not reachable");
    }
  };

  useEffect(() => {
    fetchHealthStatus();
  }, []);

  return (
    <div style={{ padding: "2rem", fontSize: "1.5rem" }}>
      <h1>Vocal Path</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
