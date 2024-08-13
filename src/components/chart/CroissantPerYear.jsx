// components/BarChart.js
import { Bar, Line } from "react-chartjs-2";
import "./chart.css";
import { useEffect, useState } from "react";
import { makeRequest } from "../../services/axios";

const CroissantPerYear = () => {

    const [dataParAns, setDataParAns] = useState([]);
        
    // API COMPTE LA NAISSANCE GROUPER PAR ANNEE 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await makeRequest.get(`/yearBirthday`);
                if (!response.data) {
                    console.log("Aucune donnée trouvée");
                    return;
                }
                setDataParAns(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    


    // Remplir les années manquantes avec 0 actes
    const newYear = new Date().getFullYear();
    const completeData = [];
    const years = []; 
    for (let year = (newYear - 30); year <=  newYear; year++) {
        years.push(year);
        const dataForYear = dataParAns.find(item => item.annee === year);
        completeData.push(dataForYear ? dataForYear.nombre_actes : 0);
    }

    // console.log(years);
    // console.log(completeData);
    
    const data = {
        // labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
        labels: years, // 30 dernières années.
        datasets: [
            {
                label: "Présentation nombre de naissance chaque année",
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: completeData,
            },
        ],
        borderWidth: 1,
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    

    /*const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);*/

    return (
        <>
        {dataParAns && dataParAns.length > 0 ?
        (
            <div 
            style={{ margin: "2.5rem 1rem", minWidth: "765px", minHeight:"300px"}} 
            >
                <Line data={data} options={options} />
            </div>

        ):(
            <p>Aucun donné à afficher</p>
        )
        }
        </>
    );
};

export default CroissantPerYear;