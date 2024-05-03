import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

@Controller("/produtos")
export class ProdutoController{

    constructor(private readonly produtoService: ProdutoService){}

    @Get()
    @HttpCode(HttpStatus.OK) // Status 200 do HTTP
    findAll(): Promise<Produto[]>{
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK) // Status 200 do HTTP
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
        return this.produtoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK) // Status 200 do HTTP
    findBy(@Param('nome') nome: string): Promise<Produto[]>{
        return this.produtoService.findByNome(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.create(produto);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.update(produto);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) // Status 204 do HTTP
    delete(@Param('id', ParseIntPipe) id: number){
        return this.produtoService.delete(id);
    }

}