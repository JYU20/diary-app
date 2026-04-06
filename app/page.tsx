import Link from "next/link";

export default function Home(){
  return(
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className="text-xl text-gray-800 md:text-3xl md:leadding-normal">
          <strong>Huma, our beloved son is the cuttest in the whole world!</strong>
          <br />
          We are going to share his cuteness on this app!
        </p>
        <div className="flex items-center gap-5 self-start rounded-lg bg-blue-800 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600">
          <span>Lets share his cuteness now!</span>
        </div>
        </div>
      </div>
    </main>
  )
}