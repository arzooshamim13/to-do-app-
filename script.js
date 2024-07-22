document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const todoText = input.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
            });

            li.appendChild(deleteButton);
            list.appendChild(li);

            input.value = '';
            input.focus();
        }
    });
});
