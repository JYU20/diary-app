import prisma from "@/lib/prisma";

export async function fetchDashboard() {
  const email = "user+1@example.com";
  try {
    return await prisma.user.findFirstOrThrow({
      where: { email },
      select: {
        id: true,
        name: true,
        image: true,
        description: true,
        posts: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch.");
  }
}

export async function fetxhLatestPosts(){
  try{
    return await prisma.post.findMay({
      select:{
        id: true,
        image: true,
        caption: true,
        createdAt: true,
        user: {
          select:{
            id: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }catch(error){
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts.");
  }
}
