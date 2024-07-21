import Link from "next/link";
import { AuthForm } from "../_components/auth-form/AuthForm";
import { Button } from "~/components/ui/button";

export default function AuthLoginPage() {
  return (
    <AuthForm>
      <div></div>
      <div className="grid gap-2">
        <div className="flex flex-row justify-between">
          <Link href="/auth/forgot-password">
            <Button variant="link" size="link">
              Lupa password
            </Button>
          </Link>

          <Link href="/auth/register" replace>
            <Button variant="link" size="link">
              Daftar Sekarang
            </Button>
          </Link>
        </div>
        <Button className="w-full">Login</Button>
      </div>
    </AuthForm>
  );
}
