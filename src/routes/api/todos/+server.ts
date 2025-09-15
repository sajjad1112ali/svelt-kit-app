import type { RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/database/prisma';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' }
  });
  	return json(todos, { status: 201 });

};

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const todo = await prisma.todo.create({
    data: {
      title: data.title
    }
  });
  	return json(todo, { status: 201 });
};
