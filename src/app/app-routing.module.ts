import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'app-one',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'appOne',
        exposedModule: './AppOneModule', // Reference the unique module name exposed by app-one
      }).then((m) => m.AppModule), // This is still the internal AppModule of app-one
  },
  {
    path: 'app-two',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'appTwo',
        exposedModule: './AppTwoModule', // Reference the unique module name exposed by app-two
      }).then((m) => m.AppModule),
  },
  {
    path: 'app-three',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'appThree',
        exposedModule: './AppThreeModule', // Reference the unique module name exposed by app-three
      }).then((m) => m.AppModule),
  },
  { path: '', redirectTo: 'app-one', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
