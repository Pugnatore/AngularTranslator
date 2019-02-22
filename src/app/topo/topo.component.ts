import{Component} from '@angular/core'


@Component({
    selector:'app-topo',
    templateUrl:'./topo.component.html',
    /*template:`<p> 
        Componente topo funciona
            </p>`*/
    styleUrls:['./topo.component.css']
})

export class TopoComponent{
    public Titulo: string = "Tradutor"
}