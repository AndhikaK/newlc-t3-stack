import { Button } from "~/components/ui/button";
import { AuthForm } from "../_components/auth-form/AuthForm";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <AuthForm>
      <div className="grid gap-4">
        <span className="text-sm">
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </span>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="user.email@gmail.com" />
        </div>

        <Button>Reset Password</Button>
      </div>
    </AuthForm>
  );
}
