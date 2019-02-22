import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FRASES} from './frases-mock';
import {Frase} from '../shared/frase.model'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases:Frase[]=FRASES;
  public instrucao:string="Traduza esta frase!!";
  public resposta:string='';
  @Output() public encerrarJogo:EventEmitter<string>=new EventEmitter();
  //ou
  //@Output() public encerrarJogo=new EventEmitter();

  public rodada:number=0;
  public rodadaFrase:Frase;
  public progressoPainel:number=0;
  public tentativas=3;
  constructor() { 
    
    this.atualizaRodada();

  }

  ngOnInit() {
    
  }

  public atualizaResposta(resposta: Event):void{
     this.resposta=(<HTMLInputElement>resposta.target).value;
     
  }

  public verificarResposta(){


    if(this.rodadaFrase.frasePtBr===this.resposta){
      console.log("Verdade");
      
      if(this.rodada===FRASES.length-1){
        this.encerrarJogo.emit("Vitoria");
        
      }
      
      this.rodada++;
      this.atualizaRodada();
      this.progressoPainel+=(100/(this.frases.length));
      
      

     
    }
    else{
      this.tentativas-=1;
      if(this.tentativas===-1)
      this.encerrarJogo.emit("Derrota");
    }
  }


  atualizaRodada():void{
    
    this.rodadaFrase=this.frases[this.rodada];
    this.resposta="";
  }

 
}
