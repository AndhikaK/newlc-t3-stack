import Link from "next/link";
import { AuthForm } from "../_components/auth-form/AuthForm";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

export default function AuthLoginPage() {
  return (
    <AuthForm>
      <div className="grid gap-4">
        <div className="grid gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="npm">NPM/NIK</Label>
            <Input type="text" id="npm" placeholder="NPM/NIK" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input type="text" id="name" placeholder="Nama Lengkap" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="user.email@gmail.com" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="*****" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input type="password" id="confirm_password" placeholder="*****" />
          </div>
        </div>

        <div className="grid gap-2">
          <Button className="w-full">Register</Button>
          <div className="grid place-items-center">
            <Link href="/auth/login" replace>
              <Button variant="link">Kembali ke Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </AuthForm>
  );
}
