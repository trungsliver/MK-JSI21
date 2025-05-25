// var item1 = document.getElementById('item1');
// var dbRef = firebase.database().ref().child('item1')
//     // firebase.database(): truy cập realtime Database trong firebase
//     // .ref(): truy cập root của Realtime Database
//     // .child('item1'): trỏ đến nhánh con trong db có key = 'item1'
// dbRef.on('value', snap => item1.innerHTML = snap.val());
//     // on(value, function): lắng nghe sự kiện thi thay đổi dữ liệu tại 'item1' trên db
//     // Khi giá trị của item1 trên db thay đổi, function sẽ được gọi
//     // snap.val(): lấy giá trị hiện tại của 'item1' trong db


import { database } from './firebase-config.js';
import { ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// Tham chiếu đến node 'todos' trong database
const todosRef = ref(database, 'todos');

// Hàm thêm todo mới
const addTodo = function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    
    if (todoText) {
        // Thêm todo mới vào database
        push(todosRef, {
            text: todoText,
            completed: false,
            timestamp: Date.now()
        });
        
        // Xóa nội dung input
        todoInput.value = '';
    }
};

// Gán hàm addTodo cho nút thêm
document.getElementById('btn1').onclick = addTodo;

// Hàm xóa todo
window.deleteTodo = function(todoId) {
    const todoRef = ref(database, `todos/${todoId}`);
    remove(todoRef);
};

// Lắng nghe sự thay đổi trong database
onValue(todosRef, (snapshot) => {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    snapshot.forEach((childSnapshot) => {
        const todo = childSnapshot.val();
        const todoId = childSnapshot.key;
        
        const todoElement = document.createElement('div');
        todoElement.className = 'todo-item';
        todoElement.innerHTML = `
            <span>${todo.text}</span>
            <span class="delete-btn" onclick="deleteTodo('${todoId}')">❌</span>
        `;
        
        todoList.appendChild(todoElement);
    });
});
