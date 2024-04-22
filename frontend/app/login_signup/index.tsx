'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './login.css';
import Link from 'next/link';
import { Facebook } from '../assets/icons/Facebook';
import { Google } from '../assets/icons/Google';

// Define interfaces for sign-up and sign-in data
interface SignUpData {
	username: string;
	email: string;
	password: string;
	password2: string;
}

interface SignInData {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const [signUpData, setSignUpData] = useState<SignUpData>({ username: '', email: '', password: '', password2: '' });
	const [signInData, setSignInData] = useState<SignInData>({ email: '', password: '' });
	const [error, setError] = useState<string | null>(null);

	const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/account/register/', signUpData);
			console.log('Sign-up successful:', response.data);
			setError(null);
		} catch (err) {
			console.error('Sign-up error:', err);
			setError('Error during sign-up');
		}
	};

	const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/account/login/', signInData);
			console.log('Sign-in successful:', response.data);
			setError(null);
		} catch (err) {
			console.error('Sign-in error:', err);
			setError('Error during sign-in');
		}
	};

	// Update to accept a setter with a specific type
	const handleInputChange = <T,>(setter: React.Dispatch<React.SetStateAction<T>>) => (
		e: ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setter((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');

		const handleSignUpClick = () => {
			const container = document.getElementById('container');
			if (container) container.classList.add('right-panel-active');
		};

		const handleSignInClick = () => {
			const container = document.getElementById('container');
			if (container) container.classList.remove('right-panel-active');
		};

		signUpButton?.addEventListener('click', handleSignUpClick);
		signInButton?.addEventListener('click', handleSignInClick);

		return () => {
			signUpButton?.removeEventListener('click', handleSignUpClick);
			signInButton?.removeEventListener('click', handleSignInClick);
		};
	}, []);

	return (
		<div className="container" id="container">
			<div className="form-container sign-up-container">
				<form onSubmit={handleSignUp}>
					<h1>Create Account</h1>
					<div className="social-container">
						<Link href="/" className="social">
							<Facebook />
						</Link>
						<Link href="/" className="social">
							<Google />
						</Link>
					</div>
					<span>Or use your email for registration</span>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={signUpData.username}
						onChange={handleInputChange(setSignUpData)}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={signUpData.email}
						onChange={handleInputChange(setSignUpData)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={signUpData.password}
						onChange={handleInputChange(setSignUpData)}
					/>
					<input
						type="password"
						name="password2"
						placeholder="Retype Password"
						value={signUpData.password2}
						onChange={handleInputChange(setSignUpData)}
					/>
					<button type="submit">Sign Up</button>
				</form>
			</div>
			<div className="form-container sign-in-container">
				<form onSubmit={handleSignIn}>
					<h1>Sign in</h1>
					<div className="social-container">
						<Link href="/" className="social">
							<Facebook />
						</Link>
						<Link href="/" className="social">
							<Google />
						</Link>
					</div>
					<span>Or</span>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={signInData.email}
						onChange={handleInputChange(setSignInData)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={signInData.password}
						onChange={handleInputChange(setSignInData)}
					/>
					<button type="submit">Sign In</button>
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
						<h1>Don&apos;t have an account?</h1>
						<p>
							<button className="ghost" id="signUp">Sign Up</button>
						</p>
					</div>
				</div>
			</div>
			{error && <div className="error-message">{error}</div>}
		</div>
	);
};

export default Login;
