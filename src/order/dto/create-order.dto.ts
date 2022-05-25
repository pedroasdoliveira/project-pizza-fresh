import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID } from "class-validator";

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que está criando o pedido',
    example: '426b813b-d58f-4c0d-8909-7b0c18b21893'
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Número da mesa que está realizando o pedido',
    example: 1
  })
  tableNumber: number;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'Lista com os Ids dos produtos no pedido',
    example: '["8d3fb6fd-cced-4315-b295-7aab7e8d8366", "f063f4dd-f924-45cb-9787-91e705198762"]'
  })
  products: string[];
}
