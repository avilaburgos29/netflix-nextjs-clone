"use client";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export default function GithubSigninButton() {

    return (
        <Button onClick={() => signIn("github")} variant="outline" size="icon" className="w-8 h-8">
            <GithubIcon className="w-4 h-4" />
        </Button>        
    );
}