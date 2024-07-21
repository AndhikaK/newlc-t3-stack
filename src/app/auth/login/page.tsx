import Link from "next/link";
import { AuthForm } from "../_components/auth-form/AuthForm";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { PlayIcon } from "@radix-ui/react-icons";

export default function AuthLoginPage() {
  return (
    <AuthForm>
      <div></div>
      <div className="grid gap-2">
        <div className="grid gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="credential">Email/NPM/NIK</Label>
            <Input type="text" id="credential" placeholder="Email/NPM/NIK" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="*****" />
          </div>
        </div>

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

        <div className="grid place-items-center pt-2">
          <span className="text-sm font-semibold">Panduan Pengunaan</span>

          <div className="flex w-full flex-row justify-around">
            <Button variant="link" size="link">
              <PlayIcon className="mr-2 h-4 w-4" />
              Mobile
            </Button>

            <Button variant="link" size="link">
              <PlayIcon className="mr-2 h-4 w-4" />
              Web
            </Button>
          </div>
        </div>
      </div>
    </AuthForm>
  );
}
