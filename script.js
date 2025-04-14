function afficherTaches() {
    const list = document.getElementById('task-list');
    list.innerHTML = ''; // Nettoyer la liste avant d'afficher

    const tasks = JSON.parse(localStorage.getItem('taches')) || [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('task-input');
    const task = input.value;

    if (task.trim() !== "") {
        let tasks = JSON.parse(localStorage.getItem('taches')) || [];
        tasks.push(task);
        localStorage.setItem('taches', JSON.stringify(tasks));
        input.value = '';
        afficherTaches(); // Afficher après ajout
    }
}

// Affiche les tâches au chargement de la page
window.onload = afficherTaches;
