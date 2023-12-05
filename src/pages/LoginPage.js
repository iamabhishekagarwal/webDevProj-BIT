// import React, { useState } from "react";
// import "./LoginPageCSS.css";

// function LoginPage() {
// const [isSignUp, setIsSignUp] = useState(false);

// const handleLogin = () => {
// setIsSignUp(false);
// };

// const handleRegister = () => {
// setIsSignUp(true);
// };

// return (
// <div className={`container ${isSignUp ? "active" : ""}` } id="container">
//     <div className="form-container sign-up">
//     <form>
//         <h1>Create Account</h1>
//         <div className="social-icons">
//         {/* Add your social icons */}
//         </div>
//         <span>or use your email for registration</span>
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <button>Sign Up</button>
//     </form>
//     </div>
//     <div className="form-container sign-in">
//     <form>
//         <h1>Sign In</h1>
//         <div className="social-icons">
//         {/* Add your social icons */}
//         </div>
//         <span>or use your email password</span>
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <a href="#">Forget Your Password?</a>
//         <button>Sign In</button>
//     </form>
//     </div>
//     <div className="toggle-container">
//     <div className="toggle">
//         <div className={`toggle-panel ${isSignUp ? "toggle-right" : "toggle-left"}`}>
//         <h1>{isSignUp ? "Hello, Friend!" : "Welcome Back!"}</h1>
//         <p>{isSignUp ? "Register with your personal details to use all of site features" : "Enter your personal details to use all of site features"}</p>
//         <button onClick={handleLogin} className={isSignUp ? "" : "hidden"} id="login">
//             Sign In
//         </button>
//         <button onClick={handleRegister} className={isSignUp ? "hidden" : ""} id="register">
//             Sign Up
//         </button>
//         </div>
//     </div>
//     </div>
// </div>
// );
// }

// export default LoginPage;
