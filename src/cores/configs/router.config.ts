import { RouterModule } from '@nestjs/core';
import { AuthModule } from 'src/features/auth/auth.module';
import { NotificationModule } from 'src/features/notification/public/notification.module';
import { UserModule } from 'src/features/user/user.module';

export default RouterModule.register([
  {
    path: '/api/v1',
    children: [
      {
        path: 'auth',
        module: AuthModule,
      },
      {
        path: 'users',
        module: UserModule,
      },
      {
        path: 'notifications',
        module: NotificationModule,
      },
    ],
  },
]);
