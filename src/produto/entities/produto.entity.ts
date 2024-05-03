import { IsNotEmpty, IsNumber, isNumber } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity"


@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()  
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({ type: "decimal", precision:10, scale: 2, nullable: false})
    preco: number

    @Column({length: 1000, nullable: false})  
    foto: string
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
}