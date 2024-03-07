import { pgSchema, serial, text } from 'drizzle-orm/pg-core';

export const authSchema = pgSchema('auth').table('auth', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  password: text('password'),
});
