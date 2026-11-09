import Etudiant from './Components/Etudiant';
import ListeEtudiants from './Components/ListeEtudiants';
import Compteur from './Components/Compteur';
import FormulaireEtudiant from './Components/FormulaireEtudiant';
import GestionEtudiants from './Components/GestionEtudiants';


function App() {
    return (
        <div>
            <h1>Gestion des étudiants</h1>
            <h1>Application de gestion des étudiants</h1> 
            <p>Bienvenue dans notre application React</p> 
            <button>Ajouter un étudiant</button> 
            <h2>Informations des étudiants</h2>

            <Etudiant
                nom="Alami"
                prenom="Ahmed"
                age={20}
                filiere="DAI"
            />

            <Etudiant
                nom="Benali"
                prenom="Sara"
                age={21}
                filiere="DS"
            />

            <Etudiant
                nom="Idrissi"
                prenom="Youssef"
                age={19}
                filiere="DAI"
            />

            <ListeEtudiants />
            <Compteur />
            <FormulaireEtudiant />
            <GestionEtudiants />
        </div>
    );
}

export default App;