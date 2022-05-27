import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { RegisterUser } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findOne(username: string): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ username: username });
  }

  async create(user: RegisterUser): Promise<InsertResult> {
    return this.usersRepository.insert(user);
  }
}
