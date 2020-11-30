import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {
  newTask='';
  @track  isEdit;
@track
todoTasks=[];
@track
todoTask=[];


  updateTaskValue(event)
  {
      //console.log("method being called");
      this.newTask=event.target.value;
      //console.log(this.newTask);
      var id= event.target.id;
     // console.log(id);
  }

  addTaskItem(event){
  //console.log("buttonclicked");
  if(this.newTask!=''){
  this.todoTasks.push({

    id:this.todoTasks.length+1,
    name:this.newTask
});
  }
    this.newTask='';
  }
 
  deleteTask(event){
    let idToDelete=event.target.name;
      let todoTaskk=this.todoTasks;
    let toDoTaskIndex;
    for(let i=0;i<todoTaskk.length;i++){
        if(idToDelete===todoTaskk[i].id)
        toDoTaskIndex=i;   
    }
     this.todoTasks.splice(toDoTaskIndex,1);
      }
      
     editTask(event){
        var idd= event.target.name;
        //var na=event.target.name;

        let todoTa=this.todoTask;
        
        var todoTaskk=this.todoTasks;
        console.log(JSON.stringify(todoTaskk));
        
        let idToInsert;
        for(let i=0;i<todoTaskk.length;i++){

        if(idd===todoTaskk[i].id)
        //idtoPop= (todoTaskk[i]);
        {
        idToInsert=i;
        let name=todoTaskk[i].name;
        
               var deletedItem=todoTaskk.splice(idToInsert,1);
               console.log(deletedItem);
      
         
          console.log(todoTaskk);
          //var elementNo=todoTaskk.length;
          todoTa.push({ id:   todoTa.length+1,
                        name: ''
            });
          
          
        console.log(JSON.stringify(todoTa));
        
        this.isEdit=todoTa.length;
        //console.log(JSON.stringify(this.todoTask));
        }
       
    }
  }
    
  todoIte='';
  innerInput(event){
     this.todoIte=event.target.value;
  }
  saveTask(event){
      var saveId=event.target.value;
     // console.log(saveId);
      //console.log(this.todoIte);
      let todoTaskk=this.todoTasks;
      let editList=this.todoTask;
      let idToPop;
      for(let i=0;i< editList.length;i++){
      if(saveId===editList[i].id)
            {
             idToPop=i;
             
              editList.splice(idToPop,1);

               todoTaskk.push({
                id: todoTaskk.length+5,
                name:this.todoIte
               });
             }
             console.log(JSON.stringify(todoTaskk));
              
              this.todoIte='';
            } //this.todoTasks.forEach(todoItems => isId = (todoItems.Id === this.idd))
            
  }        

}
