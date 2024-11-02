import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <div className="navbar bg-[#9B7EBD] text-white shadow-md">
            <div className="flex-1">

            </div>
            <div className="flex-none">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

        </div>
    )
}   
