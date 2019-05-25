import { NgModule } from "@angular/core";
import { MaterialDesignModule } from './other-core-modules/material-design.module';

import { AppRoutingModule } from './app-routing.module';

// other core modules
const modules = [
    AppRoutingModule,
    MaterialDesignModule
]

@NgModule({
    imports: [ ...modules ],
    exports: [ ...modules ]
})


export class CoreModule { }