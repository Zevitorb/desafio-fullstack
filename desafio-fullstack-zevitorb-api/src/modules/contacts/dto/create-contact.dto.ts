import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  numbers: number[];

  @IsString()
  @IsEmail()
  emails: string[];

  @IsString()
  @IsOptional()
  company: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  userId: string;
}
