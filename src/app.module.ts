import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import routerConfig from "./cores/configs/router.config";
import { sequelizeConfigAsync } from "./cores/configs/sequelize.config";
import { ResponseModule } from "./cores/modules/response/response.module";
import { AuthModule } from "./features/auth/auth.module";
import { MaterialRequestModule } from "./features/material-request/material-request.module";
import { UserModule } from "./features/user/user.module";

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
      cache: true,
    }),
    SequelizeModule.forRootAsync(sequelizeConfigAsync),
    routerConfig,
    AuthModule,
    ResponseModule,
    UserModule,
    MaterialRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
