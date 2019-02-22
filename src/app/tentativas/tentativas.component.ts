import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Coracao} from'../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  //no monento em que o construtor e iniciado, as variaveis de input ainda nao foram setadas com os valores do outro componente, por isso se fizermos console.log no construtor o valor das tentativas vais ser de undifined
  @Input() public tentativas:number;
  public coracoes:Coracao[]=[
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
    
  ]

  constructor() { 
    //console.log("Tentativas recebidas no painel: " + this.tentativas)
  }

  ngOnInit() {

    //console.log("Tentativas recebidas no painel: " + this.tentativas) So e mostrado na inicialização do componente, ou seja, o console.log so vai ser executado uma vez
    
  }

  ngOnChanges(){
    console.log("Tentativas recebidas no painel: " + this.tentativas)
    if(this.tentativas!==this.coracoes.length){
      let indice=this.coracoes.length-this.tentativas;
      console.log(indice);
      this.coracoes[indice-1].cheio=false;
    }
  }
}
