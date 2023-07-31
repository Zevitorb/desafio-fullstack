import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ContactService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(data: any) {
    return await this.contactsRepository.create(data);
  }
}
