let task = JSON.parset(localStorage.getItem("tasks")) || []; 

export const getTasks = () => tasks;

export const addTask = (task) => {
     const newTask = {
          id: Date.now(),
          text: task,
          completed: false,
     };
     task.push(newTask);
     localStorage.setItem("task", JSON.stringify(task));
};