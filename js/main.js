const {createApp} = Vue;

createApp({ 
    data(){
        return{
            TodoList : [
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
        NewToDoElement : {
            toDo : "",
            done : false
        },

        text : "",
        }
    },

    methods : {
        AddNewElement(NewElement){
            this.NewToDoElement.toDo = NewElement;
            this.TodoList.push(this.NewToDoElement)
                console.log(this.NewToDoElement)
        }
    }

}).mount("#app");