public with sharing class ApexController {
     {
        @AuraEnabled
        public static List<Account> allAccounts( Integer numberOfAccount){
            return [SELECT Id,Name,Phone,Website FROM Account limit :numberOfAccount];
        }
     }
}
