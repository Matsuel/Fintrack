"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { TabsContent } from "./ui/tabs";

export function SignIn() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await signIn("credentials", { username, password, redirect: false });
	};

	return (
		<TabsContent value="login">
			<Card>
				<CardHeader>
					<CardTitle>Connexion</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="username">
									Nom d'utilisateur ou Email
								</FieldLabel>
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
								Se connecter
							</Button>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</TabsContent>
	);
}
