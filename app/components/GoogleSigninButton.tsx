"use client";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "../../public/google.svg";
import Image from "next/image";

export default function GoogleSigninButton() {
    return (
        <Button onClick={() => signIn("google")} variant="outline" size="icon" className="w-8 h-8">
            <Image src={GoogleIcon} alt="google icon" className="w-6 h-6" />
        </Button>  
    );
}