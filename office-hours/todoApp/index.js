console.log('working');

var inputBox = document.getElementById('item-input');
var todoList = document.getElementById('todos');
var completeList = document.getElementById('completed');

function addTodo(todo) {
    var li = document.createElement('li');
    li.className += "list-group-item";
    li.textContent += todo;
    todoList.appendChild(li);
}

(function setup(itemsFromDb) {
    itemsFromDb.forEach(function (item) {
        // var li = document.createElement('li');
        // li.className += 'list-group-item';
        // li.textContent += item;
        // todoList.appendChild(li);
        addTodo(item);
    });
})(['fun', 'stuff', 'boring', 'too']);

document.getElementById('add-btn').addEventListener('click', function() {
    if (inputBox.value) {
        addTodo(inputBox.value);
        inputBox.value = "";
    }
});
