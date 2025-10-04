<script lang="ts">
	import { onMount } from 'svelte';

	interface User {
		id: number;
		name: string;
		email: string;
		join_at: string;
	}

	interface Category {
		id: number;
		name: string;
	}

	interface Genre {
		id: number;
		name: string;
	}

	interface Reactions {
		like: number;
		dislike: number;
		love: number;
		haha: number;
		wow: number;
		sad: number;
		angry: number;
	}

	type ReactionType = keyof Reactions;

	interface Post {
		id: number;
		title: string;
		slug: string;
		content: string;
		short_content: string;
		image: string;
		thumbnail: string;
		published_at: string;
		user: User;
		category: Category;
		genres: Genre[];
		reactions: Reactions;
		my_reaction: ReactionType | null;
	}

	let posts: Post[] = [];
	let newTodo = '';

	async function api<T>(url: string, options?: RequestInit): Promise<T> {
		const res = await fetch(url, options);
		if (!res.ok) throw new Error(`API error: ${res.status}`);
		const response = await res.json();
		return response.data;
	}

	onMount(async () => {
		posts = await api<Post[]>('http://localhost:8080/api/v1/posts');
		console.log(posts);
	});
</script>

<h1 class="mb-4 text-2xl font-bold">Blog</h1>

<!-- 
<ul class="space-y-2">
  {#each posts as post (post.id)}
    <p>{post.title}</p>
  {/each}
</ul> -->
<div class="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
	{#each posts as post (post.id)}
		<div class="group">
			<div class="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
					<img
						src="https://clarity-tailwind.preview.uideck.com/images/blog-single-01.png"
						class="w-full"
            alt={post.title+ 'image'}
					/>
			</div>

			<h3>
				<a href="blog-single.html" class="text-dark mb-3.5 block text-xl font-bold">
					<span
						class="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]"
					>
						{post.title}
					</span>
				</a>
			</h3>
			<p>{post.short_content}</p>

			<div class="mt-4.5 flex flex-wrap items-center justify-between gap-3">
				<div class="flex items-center gap-2.5">
					<a href="author.html" class="flex items-center gap-3">
						<div class="flex h-6 w-6 overflow-hidden rounded-full">
							<img
								src="https://clarity-tailwind.preview.uideck.com/images/blog-single-01.png"
								alt="user"
							/>
						</div>
						<p class="text-sm">{post.user.name}</p>
					</a>

					<span class="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

					<p class="text-sm">{post.published_at}</p>
				</div>
				<a
					href="category.html"
					class="text-blue bg-blue/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
					>{post.category.name}</a
				>
			</div>
		</div>
	{/each}
</div>
