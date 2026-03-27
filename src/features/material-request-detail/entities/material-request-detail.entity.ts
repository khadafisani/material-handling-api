import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { MaterialRequest } from "src/features/material-request/entities/material-request.entity";

@Table({
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  tableName: "material_request_details",
  modelName: "material_request_details",
})
export class MaterialRequestDetail extends Model {
  @ForeignKey(() => MaterialRequest)
  @Column(DataType.BIGINT)
  material_request_id: number;

  @Column(DataType.STRING(512))
  material_name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @Column(DataType.DOUBLE)
  quantity: number;

  @Column(DataType.STRING)
  unit: string;

  @Column(DataType.STRING)
  type: string;
}
