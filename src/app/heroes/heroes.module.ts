import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/hereo.component';
import { ListadoComponent } from './listado/listado.component';

//declarations son como arreglos por eso []

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent

    ],
    exports: [
        ListadoComponent
    ],

    // SOLO MODULOS SE COLOCAN EN LOS IMPORTS 
    // CommonModule se coloca por usa ng (ngIf, ngFor)
    imports: [
        CommonModule

    ]

})
export class HeroesModule {}