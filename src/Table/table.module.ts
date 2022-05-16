import { Module } from "@nestjs/common";
import { TableController } from "./table.controller";

@Module({
  controllers: [TableController],
  providers: [TableController],
})
export class TableModule {}
