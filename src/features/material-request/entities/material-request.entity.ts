import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import type { TypeWrapper } from "src/cores/helpers/type-wrapper";
import { MaterialRequestDetail } from "src/features/material-request-detail/entities/material-request-detail.entity";
import { User } from "src/features/user/entities/user.entity";
import { getMaterialRequestStatusEnumLabel } from "../enums/material-request-status.enum";

@Table({
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  deletedAt: "deleted_at",
  paranoid: true,
  tableName: "material_requests",
  modelName: "material_requests",
})
export class MaterialRequest extends Model {
  @Column(DataType.STRING)
  title: string;

  @Column(DataType.DATE)
  date: Date;

  @Column({ type: DataType.TEXT, allowNull: true })
  note: string;

  @Column({ type: DataType.SMALLINT, defaultValue: 0 })
  status: number;

  @Column({
    type: DataType.VIRTUAL,
    get() {
      return getMaterialRequestStatusEnumLabel(+this.getDataValue("status"));
    },
    set(value) {
      this.setDataValue(
        "status_name",
        getMaterialRequestStatusEnumLabel(+value),
      );
    },
  })
  status_name: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false })
  created_by: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: true })
  updated_by: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: true })
  deleted_by: number;

  @BelongsTo(() => User, "created_by")
  created_by_user: TypeWrapper<User>;

  @BelongsTo(() => User, "updated_by")
  updated_by_user: TypeWrapper<User>;

  @BelongsTo(() => User, "deleted_by")
  deleted_by_user: TypeWrapper<User>;

  @HasMany(() => MaterialRequestDetail)
  material_request_details: TypeWrapper<MaterialRequestDetail[]>;
}
