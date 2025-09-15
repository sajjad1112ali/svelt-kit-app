import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/database/prisma';

export const GET: RequestHandler = async ({ params }) => {
  const todo = await prisma.todo.findUnique({
    where: { id: Number(params.id) }
  });

  if (!todo) return json({ error: 'Not found' }, { status: 404 });

  return json(todo);
};

export const PUT: RequestHandler = async ({ params, request }) => {
  const data = await request.json();

  const todo = await prisma.todo.update({
    where: { id: Number(params.id) },
    data
  });

  return json(todo);
};

export const DELETE: RequestHandler = async ({ params }) => {
  await prisma.todo.delete({
    where: { id: Number(params.id) }
  });

  return json({ success: true }, { status: 200 });
};
