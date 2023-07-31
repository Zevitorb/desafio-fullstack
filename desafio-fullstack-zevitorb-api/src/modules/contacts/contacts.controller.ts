import { ContactService } from './contacts.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  create(@Body() data: any) {
    return this.contactService.create(data);
  }

  findAll() {
    return 'contatos encontrados';
  }

  findOne(id: string) {
    return 'contrato encontrado';
  }

  update(id: string) {
    return 'contato atualizado';
  }

  remove(id: string) {
    return 'contato removido';
  }
}
