export class Frase{
    
    
    /*public fraseEng:string;
    public frasePtBr:string;*/

    /**
     *
     */

     //ao adcioanr o public no construtor nao precisamos de ter as declaraçoes acima
    constructor(public fraseEng:string,public frasePtBr:string) {
        this.fraseEng=fraseEng;
        this.frasePtBr=frasePtBr;
    }
}