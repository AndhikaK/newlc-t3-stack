import Link from "next/link";
import { AuthForm } from "../_components/auth-form/AuthForm";

export default function AuthLoginPage() {
  return (
    <AuthForm>
      <span>This is register screen</span>
      <Link href="/auth/login" replace>
        <button>To login</button>
      </Link>
    </AuthForm>
  );
}
