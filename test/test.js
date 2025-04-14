console.log("📦 Lancement des tests de la ToDo App");

// Exemple : test si localStorage contient des tâches
let tasks = JSON.parse(localStorage.getItem("taches")) || [];

if (Array.isArray(tasks)) {
    console.log("✅ Les tâches sont bien un tableau !");
} else {
    console.error("❌ Erreur : Les tâches ne sont pas un tableau !");
}
