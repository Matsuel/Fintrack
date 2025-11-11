"use client";
import { signOut, useSession } from "next-auth/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "./Navbar";
import Register from "./Register";
import { SignIn } from "./Signin";
import { Button } from "./ui/button";

const Test = () => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <div></div>;
	}

	return (
		<div className="w-full flex flex-col gap-6 items-center">
			<Navbar />
			{session?.user ? (
				<form
					action={async () => {
						await signOut();
					}}
				>
					<Button variant="outline" size="sm" type="submit">
						Se déconnecter
					</Button>
					<p>Bonjour, {session.user.name || session.user.email}</p>
				</form>
			) : (
				<Tabs defaultValue="login">
					<TabsList>
						<TabsTrigger value="login">Connexion</TabsTrigger>
						<TabsTrigger value="register">Inscription</TabsTrigger>
					</TabsList>
					<h1>Bienvenue, connectez-vous pour accéder à votre compte</h1>
					<SignIn />
					<Register />
				</Tabs>
			)}
		</div>
	);
};

export default Test;
