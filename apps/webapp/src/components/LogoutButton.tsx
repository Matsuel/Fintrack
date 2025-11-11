"use client";
import { signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button';
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from './ui/navigation-menu';

const LogoutButton = () => {

    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div></div>;
    }

    return (
        session?.user ? (
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <form
                        action={async () => {
                            await signOut();
                        }}
                    >
                        <Button variant="ghost" type="submit" className='cursor-pointer'>
                            Déconnexion
                        </Button>
                    </form>
                </NavigationMenuLink>
            </NavigationMenuItem>
        ) : null
    );
}

export default LogoutButton