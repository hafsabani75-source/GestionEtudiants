import { useState } from 'react';

function GestionEtudiants() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');

    const [etudiants, setEtudiants] = useState([]);

   
    const ajouterEtudiant = () => {

        if (nom === '' || prenom === '' || age === '') {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const nouvelEtudiant = {
            id: Date.now(),
            nom: nom,
            prenom: prenom,
            age: age
        };

        
        setEtudiants([...etudiants, nouvelEtudiant]);

        // Vider les champs
        setNom('');
        setPrenom('');
        setAge('');
    };

    return (
        <div>
            <h1>Ajouter un étudiant à une liste</h1>

            <div>
                <label>Nom :</label>
                <input
                    type="text"
                    placeholder="Saisir nom..."
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />

                <br /><br />

                <label>Prénom :</label>
                <input
                    type="text"
                    placeholder="Saisir prénom..."
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />

                <br /><br />

                <label>Âge :</label>
                <input
                    type="number"
                    placeholder="Saisir âge..."
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <br /><br />

                <button onClick={ajouterEtudiant}>
                    + Ajouter
                </button>
            </div>

            <h2>Liste des étudiants</h2>

            {etudiants.map((etudiant) => (
                <div key={etudiant.id}>
                    <p>
                          {etudiant.nom} {etudiant.prenom}
                        — {etudiant.age} ans
                    </p>
                </div>
            ))}

        </div>
    );
}

export default GestionEtudiants;