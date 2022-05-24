import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usúario. Deve ser único',
    example: 'pedrotaxp'
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'Nome verdadeiro. Apenas para exibição',
    example: 'Pedro'
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abc@1347',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha de login',
    example: 'Abc@1347',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example: 'https://media-exp1.licdn.com/dms/image/D4D35AQFuvCwU0JCwPQ/profile-framedphoto-shrink_400_400/0/1650406705402?e=1653973200&v=beta&t=A3JBQDpblUQ9wP05p0HkdIMmVkmW93C1988Zrzr07zA'
  })
  image: string;
}
