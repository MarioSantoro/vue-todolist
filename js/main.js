const {createApp} = Vue;

createApp({ 
    data(){
        return{
            toDoList : [
                {
                    toDo :  "Fare la lista della spesa",
                    done : false
                },
                {
                    toDo :  "Mangiare",
                    done : true
                },
                {
                    toDo :  "Giocare",
                    done : true
                },
        ],

        textToDo : "",
        }
    },

    methods : {
        AddNewElement(newElement){
            if(this.textToDo !== ""){
                this.toDoList.push({toDo : newElement , done : false});
                this.textToDo = "";
            }
        },
        
        RemoveItemList(index){
            this.toDoList.splice(index , 1);
        },

        ToDoComplete(index){
            this.toDoList[index].done = !this.toDoList[index].done;
        }
    }

}).mount("#app");