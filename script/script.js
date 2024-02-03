Vue.createApp({
    data(){
        return {
            showTaskForm: false,
            newTaskText: '',
            taskList: [],
        };
    },
    methods: {
        createTask(text) {
            if (text != '') {
                this.taskList.push(text);
            }
            this.showTaskForm = !this.showTaskForm;
            console.log(this.taskList);
        }
    },
}).mount('#main');