"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Register = () => {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const res = await fetch("http://localhost:4000/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, email, password }),
		});
		if (res.status === 201) {
			console.log("User registered successfully");
			await signIn("credentials", { username, password, redirect: false });
		} else {
			console.error("Registration failed");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			Inscription
			<label>
				Nom d'utilisateur
				<input
					name="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nom d'utilisateur"
                    className="border-black border"
				/>
			</label>
			<label>
				Email
				<input
					name="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border-black border"
				/>
			</label>
			<label>
				Mot de passe
				<input
					name="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    className="border-black border"
				/>
			</label>
			<button type="submit">Se connecter</button>
		</form>
	);
};

export default Register;
