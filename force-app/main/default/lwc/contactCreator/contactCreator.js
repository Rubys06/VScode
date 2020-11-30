import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import Account_object from '@salesforce/schema/Contact';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {
    objectapiname= Account_object;
    fields=[FirstName_FIELD,LastName,Email];
    handleSuccess(event){
             const toastEvent= new ShowToastEvent({
                title: "Contact created",
                message: "Record ID: " + event.detail.id,
                variant: "success"


             })

             this.dispatchEvent(toastEvent);

    }






}