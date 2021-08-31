"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const cat_interface_1 = require("../interfaces/cat.interface");
let CatsService = class CatsService {
    constructor() {
        this.cats = [];
    }
    create(cat) {
        this.cats.push(cat);
    }
    findAll() {
        return this.cats;
    }
    async findDb() {
        const client = new pg_1.Client({
            user: 'postgres',
            host: '127.0.0.1',
            database: 'postgres',
            port: 5432,
        });
        await client.connect();
        const result = await client.query('select * from Cat');
        const cats = result.rows;
        await client.end();
        return cats;
    }
};
CatsService = __decorate([
    common_1.Injectable()
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map