import { Button } from "~/components/ui/button";
import { AuthForm } from "../_components/auth-form/AuthForm";

export default function ForgotPasswordPage() {
  return (
    <AuthForm>
      <div className="grid gap-4">
        <span className="text-sm">
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </span>

        <Button>Reset Password</Button>
      </div>
    </AuthForm>
  );
}
