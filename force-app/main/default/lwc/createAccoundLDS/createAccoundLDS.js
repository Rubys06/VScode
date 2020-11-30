import { LightningElement,track } from 'lwc';
import {createRecord} from "lightning/uiRecordApi";

export default class CreateAccoundLDS extends LightningElement {
@track accountName;
@track accountPhone;
@track accountEmail;

nameChangeHandler(event){

    this.accountName=event.target.value;

}

phoneChangeHandler(event){

    this.accountPhone=event.target.value;
}

emailChangeHandler(event){


    this.accountEmail=event.target.value;
}
accountCreation(){
    const fields={'Name': this.accountName,'Phone':this.accountPhone,'Website':this.accountEmail};
    const recordInput={apiName:'Account',fields};

    createRecord(recordInput).then(response =>{
      console.log(response.id);

    })
    .catch(error=>{
   console.log(error.body.message);

    });


}
}