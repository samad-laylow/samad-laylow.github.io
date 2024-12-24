
// Initialiser l'application
window.onload = function () {
    loadCompetences();
};

// Récupérer les compétences depuis le localStorage
function loadCompetences() {
    const competences = JSON.parse(localStorage.getItem("competences")) || [];
    const competencesList = document.getElementById("competences");
    // competences.length === 0 ? competencesList.innerHTML = "<li>Aucune compétence</li>" : competencesList.innerHTML = "";
    competencesList.innerHTML = ""; // Nettoyer la liste
    competences.forEach((competence, index) => renderCompetence(competence, index));
}

// Afficher une compétence dans la liste
function renderCompetence(competence, index) {
    const competencesList = document.getElementById("competences");

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="skill-line">
            <span class="skill">${competence.nom}</span>
            <span class="actions">
                <button class="edit" onclick="editCompetence(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete" onclick="deleteCompetence(${index})"><i class="fa-solid fa-trash"></i></button>
            </span>
        </div>
        <div class="skill-line">
            <span class="description">${competence.description || "Pas de description"}</span>
            <span class="level">${competence.niveau}</span>
        </div>
    `;

    competencesList.appendChild(li);
}

// Ajouter une nouvelle compétence
function createCompetence() {
    event.preventDefault(); // Empêcher le rechargement de la page

    const nom = document.getElementById("nom").value.trim();
    const description = document.getElementById("description").value.trim();
    const niveau = document.getElementById("niveau").value;

    if (!nom) {
        alert("Le nom de la compétence est obligatoire.");
        return;
    }

    const competences = JSON.parse(localStorage.getItem("competences")) || [];

    competences.push({ nom, description, niveau });
    localStorage.setItem("competences", JSON.stringify(competences));

    renderCompetence({ nom, description, niveau }, competences.length - 1);

    document.getElementById("form").reset(); // Réinitialiser le formulaire
}

// Modifier une compétence existante
function editCompetence(index) {
    const competences = JSON.parse(localStorage.getItem("competences"));
    const competence = competences[index];

    const nom = prompt("Modifier le nom:", competence.nom);
    const description = prompt("Modifier la description:", competence.description);
    const niveau = prompt(
        "Modifier le niveau (debutant, intermediaire, avance):",
        competence.niveau
    );

    if (nom && niveau) {
        competences[index] = { nom, description, niveau };
        localStorage.setItem("competences", JSON.stringify(competences));
        loadCompetences();
    } else {
        alert("Le nom et le niveau sont obligatoires.");
    }
}

// Supprimer une compétence
function deleteCompetence(index) {
    const competences = JSON.parse(localStorage.getItem("competences"));
    competences.splice(index, 1);
    localStorage.setItem("competences", JSON.stringify(competences));
    loadCompetences();
}


