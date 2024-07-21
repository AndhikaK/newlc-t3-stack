import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr]">
      <nav className="z-10 flex w-full flex-row justify-between bg-white px-10 py-3 shadow">
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/unila-logo.png"
            alt="unila-logo"
            width={200}
            height={200}
            className="h-7 w-7"
          />
          <span className="text-xl font-semibold">LanguageCenter</span>
        </div>
      </nav>

      <div className="z-10 grid h-screen w-full place-items-center overflow-scroll py-8">
        {children}
      </div>

      <div
        className="bg-layout absolute left-0 top-0 z-0 h-screen w-screen bg-slate-100 bg-cover bg-center blur-md"
        style={{
          backgroundImage: "url('/bg-unila.jpg')",
        }}
      />
    </div>
  );
}
