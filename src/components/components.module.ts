import { NgModule } from '@angular/core';
import { MenuListComponent } from './menu-list/menu-list';
import { AboutComponent } from './about/about';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
	declarations: [MenuListComponent,
    AboutComponent],
	imports: [IonicModule],
	exports: [MenuListComponent,
    AboutComponent]
})
export class ComponentsModule {}
