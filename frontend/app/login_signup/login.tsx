// import React from 'react';
// import './login.css';

// const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");
// const container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener("click", () => {
// 	container.classList.remove("right-panel-active");
// });
"use client";
import React, { useEffect } from 'react';
import './login.css';

const Login: React.FC = () => {
  // Event handlers as React useCallback hooks or regular functions
  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    if (container) container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    if (container) container.classList.remove("right-panel-active");
  };

  // Use useEffect to attach event listeners on mount
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");

    if (signUpButton && signInButton) {
      signUpButton.addEventListener("click", handleSignUpClick);
      signInButton.addEventListener("click", handleSignInClick);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (signUpButton && signInButton) {
        signUpButton.removeEventListener("click", handleSignUpClick);
        signInButton.removeEventListener("click", handleSignInClick);
      }
    };
  }, []);

  return (
	<><div className="container" id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>

			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>

			</div>
			<span>or</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>
				<button className="ghost" id="signIn">Sign In</button>
				</p>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Don't have and account?</h1>
				<p>
				<button className="ghost" id="signUp">Sign Up</button>
				</p>
			</div>
		</div>
	</div>
	</div></>
);
};

export default Login;