//

import * as z from 'zod';

import { Db } from './../db';

export abstract class Controller<T> {
  private db: Db;

  protected prefix: string;

  private schema?: z.ZodType<T>;

  constructor(prefix: string, schema?: z.ZodType<T>) {
    this.db = new Db();

    this.prefix = prefix;

    this.schema = schema;

    // Create the group if it doesn't exist
    const exists = this.db.has(this.prefix);

    if (!exists) {
      this.db.set(this.prefix, []);
    }
  }

  async set(key: string, value: T): Promise<void> {
    this.schema?.parse(value);

    const group = new Set(await this.db.get<string[]>(this.prefix));

    group.add(key);

    await this.db.set(this.prefix, [...group]);

    await this.db.set(`${this.prefix}:${key}`, value);
  }

  async setMany(entries: [string, T][]): Promise<void> {
    for (const [_, value] of entries) {
      this.schema?.parse(value);
    }

    const group = new Set(await this.db.get<string[]>(this.prefix));

    for (const [key, value] of entries) {
      group.add(key);

      await this.db.set(`${this.prefix}:${key}`, value);
    }

    await this.db.set(this.prefix, [...group]);
  }

  async get(key: string): Promise<T | undefined> {
    const value = await this.db.get<T>(`${this.prefix}:${key}`);

    if (!value) {
      return undefined;
    }

    this.schema?.parse(value);

    return value;
  }

  async has(key: string): Promise<boolean> {
    return await this.db.has(`${this.prefix}:${key}`);
  }

  async delete(key: string): Promise<void> {
    const group = new Set(await this.db.get<string[]>(this.prefix));

    group.delete(key);

    await this.db.set(this.prefix, [...group]);

    await this.db.delete(`${this.prefix}:${key}`);
  }

  async deleteMany(keys: string[]): Promise<void> {
    const group = new Set(await this.db.get<string[]>(this.prefix));

    for (const key of keys) {
      group.delete(key);

      await this.db.delete(`${this.prefix}:${key}`);
    }

    await this.db.set(this.prefix, [...group]);
  }

  async clear(): Promise<void> {
    const group = (await this.db.get<string[]>(this.prefix)) ?? [];

    for (const key of group) {
      await this.db.delete(`${this.prefix}:${key}`);
    }

    await this.db.set(this.prefix, []);
  }

  async size(): Promise<number> {
    const group = await this.db.get<string[]>(this.prefix);

    return group.length;
  }

  async keys(): Promise<string[]> {
    return await this.db.get<string[]>(this.prefix);
  }

  async values(): Promise<T[]> {
    const group = await this.db.get<string[]>(this.prefix);

    const values = group.map(
      async (key) => await this.db.get<T>(`${this.prefix}:${key}`)
    );

    return await Promise.all(values);
  }

  async entries(): Promise<[string, T][]> {
    throw new Error('Not implemented');
  }
}
