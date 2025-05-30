"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

type AuthFormProps = {
  onSubmit?: (values: {
    name?: string;
    email: string;
    password: string;
  }) => void;
  onGoogleLogin?: () => void;
} & React.ComponentProps<"div">;

export function AuthForm({
  className,
  onSubmit,
  onGoogleLogin,
  ...props
}: AuthFormProps) {
  const pathname = usePathname();
  const mode = useMemo<"login" | "signup">(() => {
    return pathname === "/signup" ? "signup" : "login";
  }, [pathname]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ name, email, password });
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-4 py-10",
        className
      )}
      {...props}
    >
      <Card className="md:!w-[700px] max-w-lg">
        <CardHeader>
          <CardTitle className="md:text-2xl">
            {mode === "login" ? "Login to Supametrics" : "Create a new account"}
          </CardTitle>
          <CardDescription>
            {mode === "login"
              ? "Enter your email below to login to your account"
              : "Sign up with your email to get started"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {mode === "signup" && (
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {mode === "login" && (
                <Link
                  href="/forgot-password"
                  className="text-main text-right text-sm"
                >
                  Forgotten Password?
                </Link>
              )}

              <Button type="submit" className="w-full">
                {mode === "login" ? "Login" : "Sign up"}
              </Button>

              {mode === "signup" && (
                <p className="text-sm text-center text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link href="/terms" className="underline underline-offset-4">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              )}

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={onGoogleLogin}
              >
                <IconBrandGoogle size={18} />
                Continue with Google
              </Button>

              <Button
                type="button"
                variant="outline"
                className="-mt-1 w-full flex items-center justify-center gap-2"
              >
                <IconBrandGithub size={18} />
                Continue with GitHub
              </Button>
            </div>

            <div className="text-center text-sm mt-6">
              {mode === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <Link href="/signup" className="text-main">
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link href="/login" className="text-main">
                    Log in
                  </Link>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
