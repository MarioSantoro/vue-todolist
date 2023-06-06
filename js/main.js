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
            this.toDoList.push({toDo : newElement , done : false});
            this.textToDo = "";
        },

        
    }

}).mount("#app");