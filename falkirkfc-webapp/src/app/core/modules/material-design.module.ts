import { NgModule } from "@angular/core";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule } from '@angular/material';



const modules = [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
]

@NgModule({
    imports: [ ...modules ],
    exports: [ ...modules ]
})


export class MaterialDesignModule { }