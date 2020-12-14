import React from "react";

const Homepage = (props) => {
  // React.useEffect(() => {
  //     auth().onAuthStateChanged((user) => {
  //         if (user) {
  //             setAuthenticated(true);
  //             setIsLoading(false);
  //         }
  //         else {
  //             setAuthenticated(false);
  //             setIsLoading(false);
  //         }
  //     })
  // }, [])
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <center>
      <div className="loginformbox">
        <h2>Login</h2>
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <p className="errorMsg">{passwordError}</p>
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <p className="errorMsg">{emailError}</p>
        <button
          className="deep-purple lighten-1 waves-effect waves-purple btn-small"
          onClick={handleLogin}
        >
          {" "}
          Login
        </button>
        <p> or </p>
        <button
          className="deep-yellow lighten-1 waves-effect waves-yellow btn-small"
          onClick={handleSignup}
        >
          {" "}
          Register
        </button>
      </div>
    </center>
  );
};

export default Homepage;
