<script lang="ts">
	import { onMount } from 'svelte';
	let todos: any[] = [];
	let newTodo = '';

	async function loadTodos() {
		const res = await fetch('api/todos');
		todos = await res.json();
	}

	async function addTodo() {
		if (!newTodo) return;
		await fetch('api/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: newTodo })
		});
		newTodo = '';
		await loadTodos();
	}

	onMount(loadTodos);

	async function toggleCompleted(event: Event) {
		const checkbox = event.target as HTMLInputElement;
		const id = checkbox.dataset.id; // 👈 access the data-id
		const checked = checkbox.checked;

		const res = await fetch(`/api/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ completed: checked })
		});

		if (res.ok) {
			const updated = await res.json();
			// todo = updated; // ✅ update local todo object
		} else {
			console.error('Failed to update todo');
		}
	}

	async function deleteTodo(event: Event) {
      const button = event.currentTarget as HTMLButtonElement;
  
    const id = button.dataset.id;

		const res = await fetch(`/api/todos/${id}`, {
			method: 'DELETE'
		});

		if (res.ok) {
		await loadTodos();
		} else {
			console.error('Failed to delete todo');
		}
	}
</script>

<h1 class="text-2xl font-bold">Todos</h1>

<input bind:value={newTodo} placeholder="New todo..." class="border px-2 py-1" />
<button on:click={addTodo} class="ml-2 bg-blue-500 px-4 py-1 text-white"> Add </button>

<ul>
	{#each todos as todo}
		<li class="border border-gray-400 flex items-center justify-between">
			<div>
        <input
				type="checkbox"
				data-id={todo.id}
				checked={todo.completed}
				on:change={toggleCompleted}
			/>
			{todo.title}
      </div>
			<button data-id={todo.id}
 on:click={deleteTodo} class="ml-2 text-red-500">✕</button>
		</li>
	{/each}
</ul>
