import Link from "next/link";
import { AuthForm } from "../_components/auth-form/AuthForm";

export default function AuthLoginPage() {
  return (
    <AuthForm>
      <span>This is login screen</span>
      <Link href="/auth/register" replace>
        <button>To register</button>
      </Link>
    </AuthForm>
  );
}
