import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		Credentials({
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				
				const res = await fetch(`http://localhost:4000/auth/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: credentials?.username,
						password: credentials?.password,
					}),
				});

				const user = await res.json();

				console.log("Response from auth service:", user);

				// Gérer le cas où l'authentification échoue pour afficher une erreur sur le frontend
				if (!res.ok || !user) return null;
				// Auth.js va stocker ce retour dans session.user
				return user.user;
			},
		})
	],
});

export default handler;