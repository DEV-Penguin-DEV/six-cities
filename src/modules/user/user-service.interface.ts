import {DocumentType} from '@typegoose/typegoose';
import CreateUserDto from './dto/create-user.dto.js';
import {UserEntity} from '../../model/user/user.entity.js';

export interface UserServiceInterface {
   create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
   findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
   findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
 }