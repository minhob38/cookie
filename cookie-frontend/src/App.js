import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const SERVER_ADDRESS = "https://vos.land:8000";

function App() {
  const createCookie = async () => {
    console.log("create cookie");
    const res = await axios.post(`${SERVER_ADDRESS}/api/cookie`, {}, { withCredentials: true });
    console.log(res.data);
  };

  const sendCookie = async () => {
    console.log("send cookie");
    const res = await axios.get(`${SERVER_ADDRESS}/api/cookie`, { withCredentials: true });
    console.log(res.data);
  };

  return (
    <div>
      <div onClick={createCookie}>Create Cookie</div>
      <br />
      <div onClick={sendCookie}>Send Cookie</div>
    </div>
  );
}

export default App;
