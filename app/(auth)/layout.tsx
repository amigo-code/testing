import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={32} height={38} />
            <span className="font-bold text-xl">PrepWise</span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex items-center justify-center mx-auto max-w-7xl min-h-[calc(100vh-4rem)] max-sm:px-4 max-sm:py-8">
        {children}
      </main>
    </>
  );
};

export default AuthLayout;