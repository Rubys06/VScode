import { LightningElement,track} from 'lwc';

export default class ParentProperty extends LightningElement {
@track divSelected;


     meetingRoom=[
   {  roomName:'Galaxy',
    roomCapacity:30},

   {  roomName:'Galaxt_1',
    roomCapacity:40},

   {
    roomName:'Galaxy_2',
    roomCapacity:50
   }
    ];


    tileInfo(event)
    {

     const divv=event.detail;
      this.divSelected=divv.roomCapacity;
      console.log(this.divSelected);

    }
}