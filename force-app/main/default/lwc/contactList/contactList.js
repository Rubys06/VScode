import { LightningElement ,wire,api} from 'lwc';
import {reduceErrors} from 'c/idsUtils';
import F_Name from '@salesforce/schema/Contact.FirstName';
import L_Name from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'Contact Name', fieldName: F_Name.fieldApiName, type: 'text' },
    { label: 'Contact LastName', fieldName: L_Name.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: Email.fieldApiName, type: 'text' }
];



export default class ContactList extends LightningElement {
    columns = COLUMNS;
    error;
    @wire(getContacts)
    contacts;

    



    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
     

}