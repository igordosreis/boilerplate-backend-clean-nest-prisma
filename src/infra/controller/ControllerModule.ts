import { Module } from '@nestjs/common';

// const routes: Routes = [
//   {
//     path: '/',
//     module: AppControllerModule,
//   },
// ];

@Module({
  imports: [
    // RouterModule.register(routes),
  ],
  providers: [],
})
class ControllerModule {}

export default ControllerModule;