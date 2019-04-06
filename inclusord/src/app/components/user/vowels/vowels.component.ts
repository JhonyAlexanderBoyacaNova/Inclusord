import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

declare var $:any;

@Component({
  selector: 'ng-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.css']
})
export class VowelsComponent implements OnInit {


  data = {
    letter:null,
    image:null,
    words:null,
  }

  position = 0;
  step:number = 1;
  length:number = 0;
  word_example = false;
  border_video:any =  "";
  background_body:any =  "";

  url:any = "";
  constructor(api:ApiService) { 
    this.url = api.url;
  }

  ngOnInit() {
    this.get_vowels();
    this.init();
    this.border_video = this.url + "resources/img/figure/vector1.png";
    this.background_body = this.url + "resources/img/backgrounds/background_one.png";
  }

  setLength(length){
    this.length = length;
  }

  setWord_example(word_wxample){
    this.word_example = word_wxample;
  }

  setPosition(){
    this.position = this.position + 1;  
  }

  setStep(step){
    this.step = step;
  }

  get_vowels(){
    let data:any = [
       {letter:"a",sign:"A.mp4", words:[
         {word:"Arbol",image:"Arbol.png",representation:"Arbol.mp4"}
       ]},
       {letter:"e",sign:"E.mp4",words:[
          {word:"Elefante",image:"Elefante.png",representation:"Elefante.mp4"}
        ]},
        {letter:"i",sign:"I.mp4",words:[
          {word:"Iguana",image:"Iguana.png",representation:"Iguana.mp4"}
        ]},
        {letter:"o",sign:"O.mp4",words:[
          {word:"Oveja",image:"Oveja.png",representation:"Oveja.mp4"}
        ]},
         {letter:"u",sign:"U.mp4",words:[
            {word:"Uvas",image:"Uvas.png",representation:"Uvas.mp4"}
        ]},
    ];

    this.data = data;
    this.setLength(data.length - 1);
  }

next(){
  console.log("position "+this.position);
  console.log("longitud "+this.length);
  if(this.position <= this.length){
      if(this.step==1){
      $("#step-primary").hide();
       $("#step-secondary,.btn-back").show();
       this.setStep(2);
    }else if(this.step==2){
      if(this.position == this.length){
        if(this.word_example==false){
          $("#step-secondary,.btn-back").hide();
          $("#step-tree").show();
          this.setWord_example(true);
        }else{
          $(".step-tree-secondary").show();
          $(".step-tree-primary,.btn-next").hide();
        }
      }else{
         $("#step-secondary").hide();
        $("#step-primary").show();
        this.setStep(1);
        this.setPosition();
      }
       
    }
  }}

  back(){
    if(this.position>0){
      this.position = this.position - 1;
      $("#step-primary").show();
      $("#step-secondary").hide();
      this.setStep(1);
      if(this.position==0){
        $(".btn-back").hide();
      }
    }
  }

  show_element(word){
    $(".word  p[data-word="+word+"]").css({"opacity":"1"});
  }

  onload(){
    //$("#structure").css({"background-image":"url("+ this.url + "backgrounds/background_two.png)"});
    console.log("termo");
  }

  play(){
    $("#video").get(0).play();
  }

  init(){

  }

    
  }


