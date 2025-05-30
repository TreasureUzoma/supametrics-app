import { AuthForm } from "@/components/auth-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center md:p-10">
      <div className="w-full max-w-sm">
        <AuthForm />
      </div>
    </div>
  );
}
