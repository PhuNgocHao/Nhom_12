import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative flex w-full min-h-screen items-center justify-center p-4 bg-sky-200">
      <div className="absolute top-4 left-4 flex items-center gap-x-2 ">
        <Image src="/mascot.svg" height={60} width={60} alt="Mascot" />
        <h1 className="text-3xl font-extrabold text-green-600 tracking-wide">
          Lingo
        </h1>
      </div>

      <div className="flex flex-col items-center gap-y-8 ">
        <SignIn />
      </div>
    </div>
  );
};