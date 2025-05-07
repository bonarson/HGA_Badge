const form = document.getElementById("userForm");
const qrCodeDiv = document.getElementById("qrCode");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("inputNom").value.trim();
    const prenom = document.getElementById("inputPrenom").value.trim();
    const institut = document.getElementById("inputInstitut").value.trim();

    // Afficher dans le badge
    document.getElementById("Nom").innerHTML = `📃 Nom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; ${nom}`;
    document.getElementById("Prenom").innerHTML = `📃 Prénom&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; ${prenom}`;
    document.getElementById("Institut").innerHTML = `🎓 Institut&nbsp;&nbsp;&nbsp;:&nbsp; ${institut}`;

    // Générer le contenu du QR code : "Nom Prénom, membre"
    const qrText = `nom: ${nom} , prenon:  ${prenom},Status: membre`;
    const qrSize = window.innerWidth * 0.08;

    // Vider le contenu du div #qrCode avant de générer un nouveau QR code
    qrCodeDiv.innerHTML = '';

    new QRCode(qrCodeDiv, {
        text: qrText,
        width: qrSize,
        height: qrSize,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });
});

// document.getElementById("downloadBadge").addEventListener("click", function () {
//     const badge = document.getElementById("container_cadre");
//     html2canvas(badge).then(canvas => {
//         const link = document.createElement("a");
//         link.download = "badge.png";
//         link.href = canvas.toDataURL("image/png");
//         link.click();
//     });
// });


  document.getElementById("downloadBadge").addEventListener("click", function () {
    const badge = document.getElementById("container_cadre");

    // Optionnel : faire défiler jusqu'à l'élément pour s'assurer qu’il est bien visible
    badge.scrollIntoView({ behavior: "smooth", block: "center" });

    // Utilisation avec options pour respecter les styles
    html2canvas(badge, {
      scale: 1.1, // Augmente la qualité de l'image (2x plus net)
      useCORS: true, // Si des images extérieures sont utilisées
      backgroundColor: null, // Respecte la transparence si besoin
      width: badge.offsetWidth,
      height: badge.offsetHeight,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = "badge.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });

