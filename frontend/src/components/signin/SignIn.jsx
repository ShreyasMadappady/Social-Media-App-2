import { useState } from "react";
import axios from "axios";

function SignIn({ handleAuth }) {
  const [username, setUsername] = useState({});
  const [passsword, setPassword] = useState({});

  const sendRequest = async () => {
    const res = await axios.get(
      `http://localhost:3000/signin?username=${username}?password=${passsword}`
    );
    console.log(res.data.Token);
    localStorage.setItem("Authorization", res.data.Token);
    handleAuth(true);
  };

  return (
    <div className="mx-96 my-52">
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={sendRequest}>SignIn</button>
    </div>
  );
}

export default SignIn;
