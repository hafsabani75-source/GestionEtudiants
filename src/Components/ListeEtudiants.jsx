function ListeEtudiants() {

    const etudiants = [
        { id: 1, nom: "Alami", prenom: "Ahmed", age: 20 },
        { id: 2, nom: "Benali", prenom: "Sara", age: 21 },
        { id: 3, nom: "Idrissi", prenom: "Youssef", age: 19 },
        { id: 4, nom: "Amrani", prenom: "Salma", age: 22 },
        { id: 5, nom: "Tazi", prenom: "Omar", age: 20 }
    ];

    
    return (
        <div>
            <h1>Liste des étudiants</h1>

            {
                etudiants.map((etudiant) => (
                    <div key={etudiant.id}>
                        <h3>Étudiant {etudiant.id}</h3>
                        <p>Nom : {etudiant.nom}</p>
                        <p>Prénom : {etudiant.prenom}</p>
                        <p>Âge : {etudiant.age} ans</p>
                        <hr />
                    </div>
                ))
            }

        </div>
    );
}


export default ListeEtudiants;