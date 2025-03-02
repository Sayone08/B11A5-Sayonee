//accesing all completed buttons and task names
let buttons = document.getElementsByClassName('completed_btn');
let taskNames = document.getElementsByClassName('task_name');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        //showing alert
        alert('Board Updated Successfully');

        //adding and deleting tasks and checklist
        let task = document.getElementById('task_no');
        let converted_task = parseInt(task.innerText);

        let check = document.getElementById('check_no');
        let converted_check = parseInt(check.innerText);

        converted_task = converted_task - 1;
        converted_check = converted_check + 1;

        task.innerText = converted_task;
        check.innerText = converted_check;

        //Appending child to comment container
        let task_name = taskNames[i].innerText;

        let comment_container = document.getElementById('comment_container');
        let comment_element = document.createElement('p');
        comment_element.classList.add('activity');
        let time = new Date().toLocaleTimeString();
        comment_element.innerHTML = 'You have completed the task ' + task_name + ' at ' + time;

        comment_container.appendChild(comment_element);

        //disabling btn
        this.disabled = true;
        this.style.opacity = "0.6";
        

        //Congratulate on finishing all tasks
        if (converted_task === 0) {
            alert('Congrats! You have completed all the current task');
        }

        //Clear History Button
        document.getElementById('clear-history-btn')
            .addEventListener('click', function() {
                comment_container.innerHTML='';
         });
    });
}


//show current date beside calnder
const date = new Date(); 
document.getElementById('day').textContent = date.toLocaleDateString('en-US', { weekday: 'long' }) + " , ";
document.getElementById('month-date-year').textContent = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

