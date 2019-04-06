import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';
import { Session } from 'protractor';

declare var $:any;

@Component({
  selector: 'ng-abecedary',
  templateUrl: './abecedary.component.html',
  styleUrls: ['../vowels/vowels.component.css']
})
export class AbecedaryComponent implements OnInit {

  data = {
    letter:null,
    image:null,
    words:null,
  }
  position = 0;
  step:number = 1;
  length:number = 0;

  url:any = "";
    border_video:any =  "";
    background_body:any =  "";

  constructor(api:ApiService) {
    this.url = api.url;
    this.get_abecedary();
  }

  ngOnInit() {
    this.border_video = this.url + "resources/img/figure/vector1.png";
    this.background_body = this.url + "resources/img/backgrounds/background_one.png";
  }

  //seter
   setLength(length){
     this.length = length;
   }


   setPosition(position){
     this.position = position;
   }
   setStep(step){
     this.step = step;
   }
  //

  get_abecedary(){
    let data:any = [
    {letter:"a",sign:"A.mp4", words:[
    {word:"Arbol",image:"Arbol.png",representation:"Arbol.mp4"}
    ] },
    {letter:"b",sign:"B.mp4",words:[
    {word:"Ballena",image:"Ballena.png",representation:"Ballena.mp4"}
    ]},
    {letter:"c",sign:"C.mp4",words:[
    {word:"Conejo",image:"Conejo.png",representation:"Conejo.mp4"}
    ] },
    {letter:"d",sign:"D.mp4",words:[
    {word:"Delfin",image:"Delfin.png",representation:"Delfin.mp4"}
    ] },
    {letter:"e",sign:"E.mp4",words:[
    {word:"Elefante",image:"Elefante.png",representation:"Elefante.mp4"}
    ] },
    {letter:"f",sign:"F.mp4",words:[
    {word:"Flores",image:"Flores.png",representation:"Flores.mp4"}
    ] },
    {letter:"g",sign:"G.mp4",words:[
    {word:"Gato",image:"Gato.png",representation:"Gato.mp4"}
    ] },
    {letter:"h",sign:"H.mp4",words:[
    {word:"Helicoptero",image:"Helicoptero.png",representation:"Helicoptero.mp4"}
    ] },
    {letter:"i",sign:"I.mp4",words:[
    {word:"Iguana",image:"Iguana.png",representation:"Iguana.mp4"}
    ] },
    {letter:"j",sign:"J.mp4",words:[
    {word:"Jirafa",image:"Jirafa.png",representation:"Jirafa.mp4"}
    ] },
    {letter:"k",sign:"K.mp4",words:[
    {word:"Koala",image:"Koala.png",representation:"Koala.mp4"}
    ] },
    {letter:"l",sign:"L.mp4",words:[
    {word:"Leon",image:"Leon.png",representation:"Leon.mp4"}
    ] },
    {letter:"m",sign:"M.mp4",words:[
    {word:"Manzana",image:"Manzana.png",representation:"Manzana.mp4"}
    ] },
    {letter:"n",sign:"N.mp4",words:[
    {word:"Naranja",image:"Naranja.png",representation:"Naranja.mp4"}
    ] },
    {letter:"ñ",sign:"Ñ.mp4",words:[
    {word:"Ñandu",image:"Ñandu.png",representation:"Ñandu.mp4"}
    ] },
    {letter:"o",sign:"O.mp4",words:[
    {word:"Oveja",image:"Oveja.png",representation:"Oveja.mp4"}
    ] },
    {letter:"p",sign:"P.mp4",words:[
    {word:"Pinguino",image:"Pinguino.png",representation:"Pinguino.mp4"}
    ] },
    {letter:"q",sign:"Q.mp4",words:[
    {word:"Queso",image:"Queso.png",representation:"Queso.mp4"}
    ] },
    {letter:"r",sign:"R.mp4",words:[
    {word:"Raton",image:"Raton.png",representation:"Raton.mp4"}
    ] },
    {letter:"s",sign:"S.mp4",words:[
    {word:"Sol",image:"Sol.png",representation:"Sol.mp4"}
    ] },
    {letter:"t",sign:"T.mp4",words:[
    {word:"Tigre",image:"Tigre.png",representation:"Tigre.mp4"}
    ] },
    {letter:"u",sign:"U.mp4",words:[
    {word:"Uvas",image:"Uvas.png",representation:"Uvas.mp4"}
    ] },
    {letter:"v",sign:"V.mp4",words:[
    {word:"Vaca",image:"Vaca.png",representation:"Vaca.mp4"}
    ] },
    {letter:"w",sign:"W.mp4",words:[
    {word:"Waffle",image:"Waffle.png",representation:"Waffle.mp4"}
    ] },
    {letter:"x",sign:"X.mp4",words:[
    {word:"Xilofono",image:"Xilofono.png",representation:"Xilofono.mp4"}
    ] },
    {letter:"y",sign:"Y.mp4",words:[
    {word:"Yogo",image:"Yoyo.png",representation:"Yoyo.mp4"}
    ] },
    {letter:"z",sign:"Z.mp4",words:[
    {word:"Zanahoria",image:"Zanahoria.png",representation:"Zanahoria.mp4"}
    ] },
    ];
    this.data = data;
    this.setLength(data.length - 1);
  }

  //function pending for simplify in file header//

next(){
   console.log("position "+this.position);
  console.log("longitud "+this.length);

  if(this.position <= this.length){
    if(this.step==1){
      $("#step-primary").hide();
       $("#step-secondary,.btn-back").show();
       this.step = 2;
       if(this.position === this.length){
         $(".btn-next").hide();
       }
    }else if(this.step==2){
      $("#step-secondary").hide();
      $("#step-primary").show();
      this.step = 1;
      this.position = this.position + 1;
    }
  }
    
}


back(){
     if(this.position>0){
      this.position = this.position - 1;
      $("#step-primary").show();
      $("#step-secondary").hide();
      this.setStep(1);
      if(this.position==0){
        $(".btn-back").hide();
      }else{
        $(".btn-next").show();
      }
    }
  }






}



