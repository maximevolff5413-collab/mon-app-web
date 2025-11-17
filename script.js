function validerConnexion() {
  const id = document.getElementById("identifiant").value;

  if (id.trim() === "") {
    alert("Veuillez entrer un identifiant.");
    return;
  }

  // Plus tard, on vérifiera l'identifiant dans Google Sheets
  document.getElementById("jours").style.display = "block";
}

function ouvrirPoste(jour) {
  // On passe le jour dans l’URL
  window.location.href = "post.html?jour=" + jour;
}

function retour() {
  window.location.href = "index.html";
}

function afficherPoste() {
  const params = new URLSearchParams(window.location.search);
  const jour = params.get("jour");

  document.getElementById("titre-jour").textContent = "Poste du " + jour;

  // Plus tard : ici on ira chercher la donnée dans Google Sheets
  document.getElementById("info-poste").textContent =
    "Ici s'affichera le poste du " + jour + ".";
}

// Exécute automatiquement si on est sur la page des postes
if (window.location.pathname.includes("post.html")) {
  afficherPoste();
}
