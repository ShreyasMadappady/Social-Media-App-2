import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState({});
  const [passsword, setPassword] = useState({});

  const sendRequest = async () => {
    const res = await fetch(
      `http://localhost:3000/signin?username=${username}?password=${passsword}`
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
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
