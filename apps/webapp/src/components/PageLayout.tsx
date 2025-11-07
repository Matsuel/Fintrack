"use client";
import { SessionProvider } from "next-auth/react";
import type React from "react";

interface PageLayoutProps {
	children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<SessionProvider>
			<div className="w-full min-h-screen">
				{children}
			</div>
		</SessionProvider>
	);
};

export default PageLayout;
