import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 hidden lg:block">
      <div className="max-w-7xl mx-auto flex justify-center space-x-4">
        <Image src="/flags/vietnam.png" alt="Vietnam" width={28} height={20} />
        <Image src="/flags/spain.png" alt="Spain" width={28} height={20} />
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Duolingo Clone. All rights reserved.
      </p>
    </footer>
  );
}
