import { LightningElement ,track} from 'lwc';
import allAccounts from '@salesforce/apex/ApexController.allAccounts';

export default class TostNotification extends LightningElement {
  @track userinput;
  @track Accounts;
  userInput(event){

    this.userinput=event.target.value;

  }
 
  getAccount(){
    allAccounts({numberOfAccount:this.userinput}).then(Response =>{
          this.Accounts=Response;
          console.log("success");

  }).catch(error=>{
      console.log(error.body.message);
  })


  }


}