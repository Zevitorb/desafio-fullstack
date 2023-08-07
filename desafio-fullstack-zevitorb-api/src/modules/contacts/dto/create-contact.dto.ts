import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsDate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({
    description: 'Contact name',
    default: 'Jhon Doe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Contact phone',
    default: '47 999998888',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Contact email',
    default: 'jhondoe@mail.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contact company',
    default: 'Kenzie Academy',
  })
  @IsString()
  @IsOptional()
  company: string | null;

  @ApiProperty({
    description: 'Contact description',
    default: 'My friend Jhon from Kenzie Academy',
  })
  @IsString()
  @IsOptional()
  description: string | null;

  @ApiProperty({
    description: 'User id',
  })
  @IsString()
  userId: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;
}
