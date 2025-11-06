"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function SignIn() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await signIn("credentials", { username, password, redirect: false });
	};

	return (
		<form onSubmit={handleSubmit}>
			Connexion
			<label>
				Nom d'utilisateur ou Email
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
}
