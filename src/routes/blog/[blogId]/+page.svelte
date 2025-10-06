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

<h1 class="mb-4 text-2xl font-bold">1</h1>

