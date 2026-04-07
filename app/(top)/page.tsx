import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>This is an app to share our beloved son`s photos</strong>
            <br />
            We are going to share his cutness together!
          </p>
          <Link
            href="/register"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-800 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600"
          >
            <span>Begin now!</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
        src="/img/hero-desktop.png"
        alt="Hero"
        width={1000}
        height={620}
        className="hidden md:block"
        priority
        />
        <Image
        src="/img/hero-mobile.png"
        alt="Hero"
        width={560}
        height={760}
        className="block md:hidden"
        >

        </Image>
        </div>
      </div>
    </main>
  );
}