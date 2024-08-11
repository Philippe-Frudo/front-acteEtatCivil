// components/BarChart.js
import { Bar } from "react-chartjs-2";
import "./chart.css";
import { useEffect, useState } from "react";

const CroissantPerYear = ({dataParAns}) => {

    console.log(dataParAns);
    

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

    const data = {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
        datasets: [
            {
                label: 'Presentation d\'acte de naissance',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [50, 65, 59, 80, 81, 56, 75, 80, 81, 56, 75],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
    };

    return (
        <div 
        style={{ margin: "2.5rem 1rem" }} 
        // className={(screenWidth < "992") ? "rotate" : "normal-width"}
        >
            <Bar data={data} options={options} />
        </div>
    );
};

export default CroissantPerYear;