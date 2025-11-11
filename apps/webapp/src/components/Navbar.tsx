"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";

const Navbar = () => {

    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div></div>;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/">Acceuil</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/login">Connexion</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <LogoutButton />

            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar