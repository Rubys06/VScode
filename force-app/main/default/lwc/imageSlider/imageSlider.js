import { LightningElement, track } from 'lwc';

export default class ImageSlider extends LightningElement {
   @track imgSlider;
   //imm='https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9';
  image=[
    { source:'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'},
    {source:'https://cnet3.cbsistatic.com/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg'}
     
  ];
  
     imgSlide(){
      
      let img=this.image;
     
      
      for(let i=0;i<img.length;i++){
        this.task(i);}

     }
       
     task(inn) { 
       
      setTimeout(function() { 
        let img=this.image;
        this.imgSlider=img[inn].source;
        console.log(this.inn); 
      }, 2000 ); 
    } 


    }


