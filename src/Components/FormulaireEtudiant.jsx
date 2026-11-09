import { useState } from 'react';

function FormulaireEtudiant() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');

    const ajouterEtudiant = (e) => {
        e.preventDefault();

        alert(
            "Nom : " + nom +
            "\nPrénom : " + prenom +
            "\nÂge : " + age + " ans"
        );

        setNom('');
        setPrenom('');
        setAge('');
    };

    return (
        <div>
            <h1>Formulaire d'ajout d'un étudiant</h1>

            <form onSubmit={ajouterEtudiant}>
                <label>Nom :</label>
                <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />

                <br /><br />

                <label>Prénom :</label>
                <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />

                <br /><br />

                <label>Âge :</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <br /><br />

                <button type="submit">+ Ajouter</button>
            </form>
        </div>
    );
}

export default FormulaireEtudiant;