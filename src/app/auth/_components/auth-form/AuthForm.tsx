import Image from "next/image";
import type { PropsWithChildren } from "react";

export type AuthFormProps = PropsWithChildren;

export function AuthForm({ children }: AuthFormProps) {
  return (
    <div className="grid w-screen place-items-center gap-6 px-4 md:max-w-[500px]">
      <Image
        src={"/unila-logo.png"}
        width={200}
        height={200}
        alt="unila-logo"
        className="h-[150px] w-[150px]"
      />
      <div className="w-full rounded-md bg-white p-4 shadow-md">{children}</div>
    </div>
  );
}
