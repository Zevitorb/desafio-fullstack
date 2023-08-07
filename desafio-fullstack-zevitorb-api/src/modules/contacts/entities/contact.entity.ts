import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  readonly createdAt: Date;
  name: string;
  phone: string;
  email: string;
  company: string;
  description: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
