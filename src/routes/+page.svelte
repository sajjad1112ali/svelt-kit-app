<script lang="ts">
  import { onMount } from 'svelte';

  type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };

  let todos: Todo[] = [];
  let newTodo = '';

  // Small helper for JSON fetch
  async function api<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  }

  // Load all todos once
  onMount(async () => {
    todos = await api<Todo[]>('/api/todos');
  });

  // Add new todo
  async function addTodo() {
    if (!newTodo.trim()) return;

    const created = await api<Todo>('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo })
    });

    todos = [created, ...todos];
    newTodo = '';
  }

  async function toggleCompleted(event: Event) {
    const checkbox = event.currentTarget as HTMLInputElement;
    const id = Number(checkbox.dataset.id);
    const checked = checkbox.checked;

    const updated = await api<Todo>(`/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: checked })
    });

    todos = todos.map((t) => (t.id === id ? updated : t));
  }

  async function deleteTodo(event: Event) {
    const button = event.currentTarget as HTMLButtonElement;
    const id = Number(button.dataset.id);

    await fetch(`/api/todos/${id}`, { method: 'DELETE' });

    todos = todos.filter((t) => t.id !== id);
  }
</script>

<h1 class="text-2xl font-bold mb-4">Todos</h1>

<div class="flex gap-2 mb-4">
  <input
    bind:value={newTodo}
    placeholder="New todo..."
    class="border px-2 py-1 flex-1"
  />
  <button
    on:click={addTodo}
    class="bg-blue-500 px-4 py-1 text-white rounded"
  >
    Add
  </button>
</div>

<ul class="space-y-2">
  {#each todos as todo (todo.id)}
    <li class="flex items-center justify-between border px-2 py-1 rounded">
      <div class="flex items-center gap-2">
        <input
          type="checkbox"
          data-id={todo.id}
          checked={todo.completed}
          on:change={toggleCompleted}
        />
        <span class={todo.completed ? 'line-through text-gray-500' : ''}>
          {todo.title}
        </span>
      </div>
      <button
        data-id={todo.id}
        on:click={deleteTodo}
        class="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  {/each}
</ul>
