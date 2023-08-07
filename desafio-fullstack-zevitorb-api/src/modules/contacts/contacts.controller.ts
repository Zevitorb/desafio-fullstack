import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JwtauthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  create(@Body() createContactDto: CreateContactDto, @Request() req) {
    return this.contactsService.create(createContactDto, req.user.id);
  }

  @Get()
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  findAll(@Request() req) {
    return this.contactsService.findAll(req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete(':id')
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
