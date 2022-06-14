import { useState, useEffect } from "react";
import Form from "./Form";
import Home from "./Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  useEffect(() => {
    // first time
    console.log("Render");
  });

  const checkAuth = () => {
    if (password !== cpassword) {
      console.log("Password is not matching");
      return;
    }
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    // JSX
    <>
      {!isLoggedIn && (
        <>
          <Form
            setEmail={setEmail}
            setPassword={setPassword}
            setCpassword={setCpassword}
            checkAuth={checkAuth}
          />
        </>
      )}
      {/* conditional rendering */}
      {isLoggedIn && <Home />}
    </>
  );
};

export default App;
