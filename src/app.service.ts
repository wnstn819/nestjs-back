import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
@Injectable() 
export class AppService {
  async getHello(): Promise<string> { //Promise를 String 리턴
    return 'Hello World!';
  }
}
