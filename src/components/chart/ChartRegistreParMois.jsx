import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { makeRequest } from '../../services/axios';

const ChartRegistreParMois = () => {
    const [monthlyData, setMonthlyData] = useState([]);

    useEffect(() => {

        // Appel API pour récupérer les données par mois
        makeRequest.get('/getEnregistrementsParMois')
            .then(response => {
               if ( !response.data) {
                 console.log("Aucun donnée à trouver")
                 return
               }else{
                   // Vérifiez si les données sont un tableau, sinon transformez-les
                   if (Array.isArray(response.data)) {
                       setMonthlyData(response.data);
                   } else {
                       // Si ce n'est pas un tableau, convertir en tableau
                       setMonthlyData(Object.values(response.data));
                   }
               }

            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données :", error);
            });
    }, []);
    

    // Labels des mois
    const labels = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
        'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];


    
    // Préparer les données pour le graphique
    const data = {
        labels: labels.slice(0, new Date().getMonth() + 1), // Limiter aux mois jusqu'à aujourd'hui
        datasets: [
            {
                label: "Nombre d'actes par mois",
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54, 162, 235, 0.75)',
                hoverBorderColor: 'rgba(54, 162, 235, 1)',
                data: monthlyData.slice(0, new Date().getMonth() + 1), // Limiter aux données jusqu'à aujourd'hui
            },
        ],
    };


    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    

    return (
        <div  style={{ margin: "2.5rem 1rem", minWidth: "768px", minHeight:"300px"}} >
            {monthlyData.length > 0 ? (
                <Bar data={data} options={options} />
            ) : (
                <p>Aucune donnée à afficher</p>
            )}
        </div>
    );
};

export default ChartRegistreParMois;
