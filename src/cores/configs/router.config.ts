import { RouterModule } from "@nestjs/core";
import { AuthModule } from "src/features/auth/auth.module";
import { MaterialRequestDetailModule } from "src/features/material-request-detail/material-request-detail.module";
import { MaterialRequestModule } from "src/features/material-request/material-request.module";
import { UserModule } from "src/features/user/user.module";

export default RouterModule.register([
  {
    path: "/api/v1",
    children: [
      {
        path: "auth",
        module: AuthModule,
      },
      {
        path: "users",
        module: UserModule,
      },
      {
        path: "material-requests",
        module: MaterialRequestModule,
        children: [
          {
            path: ":materialRequestId/details",
            module: MaterialRequestDetailModule,
          },
        ],
      },
    ],
  },
]);
