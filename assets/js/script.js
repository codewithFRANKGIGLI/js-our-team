// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const teamMembersObjArray = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', photo: 'assets/img/wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela Caroll', role: 'Chief Editor', photo: 'assets/img/angela-caroll-chief-editor.jpg' },
    { name: 'Walter Gordon', role: 'Office Manager', photo: 'assets/img/walter-gordon-office-manager.jpg' },
    { name: 'Angela Lopez', role: 'Social Media Manager', photo: 'assets/img/angela-lopez-social-media-manager.jpg' },
    { name: 'Frank Gigli', role: 'Developer', photo: 'assets/img/frank-gigli-developer.png' },
    { name: 'Barbara Ramos', role: 'Graphic Designer', photo: 'assets/img/barbara-ramos-graphic-designer.jpg' },
]
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i = 0; i < teamMembersObjArray.length; i++) {
    const member = teamMembersObjArray[i];
    console.log(`Nome: ${member.name}`);
    console.log(`Ruolo: ${member.role}`);
    console.log(`Foto: ${member.photo}\n`);
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
printTeamInfoToDOM(teamMembersObjArray);
function printTeamInfoToDOM() {
    let divContainer = document.createElement('div');
    document.body.appendChild(divContainer);
    for (let i = 0; i < teamMembersObjArray.length; i++) {
        const member = teamMembersObjArray[i];
        divContainer.innerHTML += `<div class="team-card">`;
        divContainer.innerHTML += `   <h3>${member.name}</h3>`;
        divContainer.innerHTML += `   <p><strong>Ruolo:</strong> ${member.role}</p>`;
        divContainer.innerHTML += `   <img src="${member.photo}" alt="${member.name}-foto" />`;
        divContainer.innerHTML += `</div>`;
    }
    console.log(divContainer);
}




// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede