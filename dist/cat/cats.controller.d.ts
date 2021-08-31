import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsController {
    private catService;
    constructor(catService: CatsService);
    findAll(): Cat[];
    findDb(): Promise<Cat[]>;
    findOne(params: any, query: any): string;
    create(createCatDto: CreateCatDto): void;
}
