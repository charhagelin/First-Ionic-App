import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondPage } from './second';
import { AboutComponent } from '../../components/about/about';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SecondPage
  ],
  imports: [
    IonicPageModule.forChild(SecondPage),
    ComponentsModule
  ],
})
export class SecondPageModule {}
