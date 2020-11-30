import { LightningElement,api } from 'lwc';

export default class Properites extends LightningElement {

@api meetngRoomInfo;//={roomName:'uh',roomCapacity:44};

divclicked(){
const tilecliked= new CustomEvent('tileclick',{detail:this.meetngRoomInfo});
this.dispatchEvent(tilecliked);


}


}