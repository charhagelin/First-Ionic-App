import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
// import { MenuListComponent } from '../../components/menu-list/menu-list';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    HomePage
    // MenuListComponent

  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule
  ],
})
export class HomePageModule {}
