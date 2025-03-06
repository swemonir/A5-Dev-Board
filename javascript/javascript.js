
//random color
document.getElementById('color-change').addEventListener('click', function() {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 90%)`;
});




//redirect
document.getElementById('redirect').addEventListener('click', function() {
    window.location.href = 'Blog.html';
});



//completed button
document.querySelectorAll('.complete-btn').forEach(button => {
    button.addEventListener('click', function() {
        let title = this.closest('.task-card').dataset.title;
        document.getElementById('activity-log').innerHTML += `<p class= mb-6>You have completed the task ${title} at ${new Date().toLocaleTimeString()}</p>`;
        this.disabled = true;
        this.classList.add('bg-gray-400');
        document.getElementById('task-counter').innerText = parseInt(document.getElementById('task-counter').innerText) + 1;
        document.getElementById('task-assigned').innerText = parseInt(document.getElementById('task-assigned').innerText) - 1;
    });
});

// Set date
document.getElementById('date').innerText = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' });



//clear history
document.getElementById('clear-history').addEventListener('click', function() {
    document.getElementById('activity-log').innerHTML = '';
});
