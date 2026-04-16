import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
async function main() {
	const bcryptedPassword = await bcrypt.hash("password", 10);
	const images = [...Array(16)]
		.map((_, i) => i + 1)
		.map((i) => `/dogs/dog_${i}.jpg`);
	const users = [...Array(10)]
		.map((_, i) => i + 1)
		.map((i) => {
			return {
				name: `user+${i}`,
				email: `user+${i}@example.com`,
				password: bcryptedPassword,
				image: images[Math.floor(Math.random() * images.length)],
				description: "こんにちは。よろしくお願いします🐕",
			};
		});

	const createPosts = () => {
		return [...Array(10)].map(() => {
			return {
				image: images[Math.floor(Math.random() * images.length)],
				caption: "かわいいワンちゃん🐶",
			};
		});
	};

	const createComments = (userId: string, postId: string) => {
		const comments = [
			"かわいい😍",
			"可愛い❤️",
			"すてき👏",
			"素敵✨",
			"ナイス🙌",
			"いいね👍",
			"👏👏👏",
			"🎉🎉🎉",
			"🍾🍾🍾",
			"🙌🙌🙌",
		];
		return {
			text: comments[Math.floor(Math.random() * comments.length)],
			userId,
			postId,
		};
	};

	for (const user of users) {
		await prisma.user.upsert({
			where: { email: user.email },
			update: {},
			create: {
				...user,
				posts: {
					create: createPosts(),
				},
			},
		});
	}

	const createdUsers = await prisma.user.findMany();
	const createdPosts = await prisma.post.findMany();
	const comments = createdPosts.flatMap((post) => {
		return createdUsers
			.map((user) => {
				return {
					postId: post.id,
					userId: user.id,
				};
			})
			.map((ids) => {
				return createComments(ids.userId, ids.postId);
			});
	});

	await prisma.comment.createMany({
		data: comments,
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
