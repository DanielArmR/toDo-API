let tasks=[];

module.exports = {
    Query: {
        tasks: (parent, args, context) => tasks,
        task: (parent, args, context) =>{
            const task = task.find((task) => task.id == args.id);
            return task;
        },
    },
    Mutation: {
        createTask: (parent, args, context) => {
            const newTask = {
                id: tasks.length,
                title: args.title,
                completed: args.completed,
            };

            tasks.push(newTask);
            return newTask;
        },
        deleteTask: (parent, args, context) => {
            try{
                tasks = tasks.filter(item => item.id !== args.id);
                return true;
            } catch(error){
                console.log(error);
                return false;
            }
        }
    }
}