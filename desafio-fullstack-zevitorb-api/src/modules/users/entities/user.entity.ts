import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  readonly createdAt: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
