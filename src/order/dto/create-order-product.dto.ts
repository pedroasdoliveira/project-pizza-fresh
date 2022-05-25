import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do produto',
    example: '8d3fb6fd-cced-4315-b295-7aab7e8d8366'
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de itens no pedido',
    example: 1
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Observações do produto',
    example: 'Sem cebola'
  })
  description: string;
}
