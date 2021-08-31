import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { Cat } from 'src/interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  async findDb(): Promise<Cat[]> {
    const client = new Client({
      user: 'postgres',
      host: '127.0.0.1',
      database: 'postgres',
      port: 5432,
    });

    await client.connect();
    const result = await client.query<Cat>('select * from Cat');
    const cats = result.rows;
    await client.end();
    return cats;
  }
}
