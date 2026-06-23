// Base de données unifiée du projet
const projectData = {
    meta: {
        title: "Cartographie Interactive — Campus IA à Fouju",
        subtitle: "Analyse consolidée et structurée des collèges d'acteurs, forces en présence, griefs techniques et points de vigilance."
    },
    taxonomy: {
        categories: {
            "all": "Tous les acteurs",
            "opposants": "Opposants & Experts",
            "elus-opp": "Élus Opposés/Critiques",
            "elus-fav": "Élus Favorables/Prudents",
            "orgs": "Orgs & Collectifs",
            "porteurs": "Porteurs & Économie"
        },
        stances: {
            "all": "Toutes les positions",
            "opposed": "Opposé / Critique",
            "favorable": "Favorable / Soutien",
            "neutral": "Prudent / Ambigü"
        }
    },
    actors: [
        { 
            name: "Christian Poteau / Pointeau", 
            category: "elus-fav", 
            stance: "neutral", 
            role: "Président de la CC Brie des Rivières et Châteaux", 
            position: "Plutôt favorable au projet mais affiche une vigilance sur l'intégration infrastructurelle.", 
            evidence: "Exige de solides retombées et garanties sur la gestion de l'eau, les mobilités et le tissu commercial de proximité.", 
            certainty: "Haute" 
        },
        { 
            name: "Arnaud Saint-Martin", 
            category: "elus-opp", 
            stance: "opposed", 
            role: "Député LFI de Seine-et-Marne (1re circ.)", 
            position: "Principal opposant politique national et local. Dénonce un projet inutile, imposé et l'opacité financière.", 
            evidence: "« Fouju devient une cause nationale ». « Thibaud Desfossés est un genre de courtier [...] »", 
            certainty: "Haute" 
        },
        { 
            name: "Emmanuel Macron", 
            category: "porteurs", 
            stance: "favorable", 
            role: "Président de la République", 
            position: "Totalement favorable. Promeut activement le projet comme fleuron de l'attractivité industrielle nationale.", 
            evidence: "Célébration officielle lors du sommet Choose France : « MGX choisit la France ».", 
            certainty: "Haute" 
        }
        // Ajoutez autant d'acteurs que nécessaire ici
    ],
    griefs: [
        {
            title: "⚡ Démesure énergétique & Foncière",
            text: "Emprise colossale de 90 hectares (l'équivalent de 130 terrains de football) de terres agricoles franciliennes artificialisées. Le site projeté consommerait à terme 1,4 GW (10,5 TWh), soit 2 % de la puissance électrique française."
        },
        {
            title: "🌐 Monopolisation et saturation des réseaux",
            text: "L'accaparement massif par les infrastructures de type data centers représente la moitié de l'ensemble des demandes de raccordement auprès de RTE. Cette concentration induit des surcoûts structurels de réseau."
        }
    ],
    vigilance: [
        "<strong>Dissimulation sous le Secret des Affaires :</strong> Le registre officiel exact des augmentations successives de capital demeure confidentiel.",
        "<strong>Flou nominatif autour de Mistral AI :</strong> Le corpus mentionne une audition parlementaire clé sans expliciter formellement l'identité physique nominative."
    ],
    sources: [
        "<strong>mesinfos.fr :</strong> Suivi économique et légal officiel. Publication de l'attribution du marché industriel d'infrastructure majeur à Eiffage en date du 11 juin 2026.",
        "<strong>L’Humanité :</strong> Enquêtes d'investigation approfondies (Pierric Marissal). Révélation précise de l'actionnariat à 70 % de MGX."
    ]
};
