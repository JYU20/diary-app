import { fetchDashboard } from "@/lib/apis";
import Link from "next/link";
import Image from "next/image";
import IconSkeleton from "@/components/IconSkeleton";

async function Dashboard() {
  const user = await fetchDashboard();
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mt-8 flex bg-white p-4">
        {user.image && (
          <Image
            className="block aspect-[1/1] size-24 rounded-full object-cover"
            src={user.image}
            width={96}
            height={96}
            alt="user icon"
          />
        )}
        {!!user.image || <IconSkeleton />}
        <div className="pl-4">
          <p className="text-lg font-semibold text-black">{user.name}</p>
          {user.description && (
            <p className="whitespace-pre-wrap font-medium">
              {user.description}
            </p>
          )}
          {!!user.description || (
            <p className="whitespace-pre-wrap text-sm opacity-20">
              🐾🐾🐾 「プロフィールを編集」から
              <br />
              自己紹介を入力しましょう 🐾🐾🐾
            </p>
          )}
          <div className="mt-4 flex">
            <p className="text-sm font-semibold text-black">
              投稿{user.posts.length}件
            </p>
            <Link
              href="/profile"
              className="ml-2 rounded border px-2 text-sm font-semibold text-black"
            >
              プロフィールを編集
            </Link>
          </div>
        </div>
      </div>
      <div className="my-8 grid grid-cols-3 gap-1 bg-white">
        {user.posts.map((post) => {
          return (
            <Link href={`/posts/${post.id}/edit`} key={post.id}>
              <Image
                className="aspect-[1/1] w-full object-cover"
                src={post.image}
                alt="post"
                width={300}
                height={300}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}