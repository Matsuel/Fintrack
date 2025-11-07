"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { TabsContent } from "./ui/tabs";

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
		<TabsContent value="register">
			<Card>
				<CardHeader>
					<CardTitle>Connexion</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="username">Nom d'utilisateur</FieldLabel>
								<Input
									name="username"
									type="text"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									placeholder="Nom d'utilisateur"
									required
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input
									name="email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
									required
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="password">Mot de passe</FieldLabel>
								<Input
									name="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Mot de passe"
									required
								/>
							</Field>
							<Button type="submit">
								S'inscrire
							</Button>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</TabsContent>
	);
};

export default Register;
