"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import LogoutButton from "./LogoutButton";

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
                        <Link href="/docs">Docs</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <LogoutButton />

            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar