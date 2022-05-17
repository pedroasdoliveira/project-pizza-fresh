import { PartialType } from "@nestjs/swagger";
import { CreateTableDto } from "./create-table.dto";

export class updateTableDto extends PartialType(CreateTableDto) {
  
}
