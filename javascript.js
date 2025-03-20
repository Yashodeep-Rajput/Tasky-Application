// var state = {
//     taskList: [
//         {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//     ],
// };
const state = {
    taskList: [],
};
  
//DOM operations
const taskcontents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

// console.log(taskcontents);
// console.log(taskModal);

const htmlTaskContent=([id,title,description,type,url]) =>{}