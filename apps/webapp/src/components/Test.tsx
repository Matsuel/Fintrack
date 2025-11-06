"use client";

import { signOut, useSession } from "next-auth/react";
import Register from "./Register";
import { SignIn } from "./Signin";

const Test = () => {
	const { data: session, status } = useSession();

	console.log("Session data:", session);

	if (status === "loading") {
		return <div></div>;
	}

	return (
		<div>
			{session?.user ? (
				<form
					action={async () => {
						await signOut();
					}}
				>
					<button type="submit">Se déconnecter</button>
					<p>Bonjour, {session.user.name || session.user.email}</p>
				</form>
			) : (
				<>
					<h1>Bienvenue, connectez-vous pour accéder à votre compte</h1>
					<SignIn />
					<Register />
				</>
			)}
		</div>
	);
};

export default Test;
