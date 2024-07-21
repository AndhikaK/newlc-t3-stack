import Link from "next/link";
import { AuthForm } from "../_components/auth-form/AuthForm";
import { Button } from "~/components/ui/button";

export default function AuthLoginPage() {
  return (
    <AuthForm>
      <div>
        <span>This is register screen</span>
      </div>

      <div className="grid gap-2">
        <Button className="w-full">Register</Button>
        <div className="grid place-items-center">
          <Link href="/auth/login" replace>
            <Button variant="link">Kembali ke Login</Button>
          </Link>
        </div>
      </div>
    </AuthForm>
  );
}
