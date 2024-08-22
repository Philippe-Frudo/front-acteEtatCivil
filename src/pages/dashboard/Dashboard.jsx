import CroissantPerYear from "../../components/chart/CroissantPerYear";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./dashboard.css";
import 'boxicons';
import { useEffect, useState } from "react";
import { makeRequest } from '../../services/axios';
import ChartRegistreParMois from "../../components/chart/ChartRegistreParMois";

Chart.register(CategoryScale);

const Dashboard = ({user}) => {

  const [totalOfficier, setTotalOfficier] = useState(''); // L'officier est comme l'utilisateur
  const [totalNaissance, setTotalNaissance] = useState('');
  const [registerToday, setRegisterToday] = useState('');
  
    // API COMPTE NOMBRE OFFICIER (UTILISATEUR)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await makeRequest.get(`/nombreOfficier`);
                if (!response.data) {
                  setTotalOfficier(response.data)
                  return;
                }
                setTotalOfficier(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
  

  // API TOTAL NOMBRE DE NAISSANCE
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await makeRequest.get(`/countNaissance`);
              if (!response.data) {
                setTotalNaissance(response.data)
                return;
              }else {
                if (user.isAdmin) {
                  setTotalNaissance(response.data.length);
                }else {
                  const filterActe = response.data.filter(acte => acte.id_commune == user.commune);
                  setTotalNaissance(filterActe.length);
                }
              }

          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, [user]);
  

    // API COMPTE NOMBRE D'ANREGISTREMENT AUJOURD'HUI
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await makeRequest.get(`/registerToday`);
                if (!response.data) {
                  console.log(response);
                  
                    // console.log("Aucune enregistrement trouvée");
                    return;
                }else {
                  if (user.isAdmin) {
                      setRegisterToday(response.data.length);
                  }else {
                    const acteToday = response.data.filter(acte => acte.id_commune == user.commune);
                      setRegisterToday(acteToday.length);
                  }

                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [user]);


    
  return (
    <>
          { /* <!-- ===== HEADER CARD 1 ===== --> */}
          <header className="main-header-content">
            <h3 className="main-header-content-title">Tableau de bord</h3>
            <span className="main-header-content-subtitle">Soutitre page</span>
            <div className="dashboard-container">
              <div className="card-content">
                <div className={ user?.isAdmin ? "dash-card dash-card-1": "hidden dash-card dash-card-1"}>
                  <h4 className="title-card">Utilisateur</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">{totalOfficier}</span>
                    <span className="dash-card-right">
                      <box-icon name='group' type='solid' color='#4547bf' fill='48px'></box-icon>
                    </span>
                  </div>
                </div>


                <div className="dash-card dash-card-3">
                  <h4 className="title-card">Total d'acte de naissance</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">{totalNaissance}</span>
                    <span className="dash-card-right">
                      <box-icon name='calendar-alt' type='solid' color='#4547bf' ></box-icon>
                    </span>
                  </div>
                </div>

                <div className="dash-card dash-card-3">
                  <h4 className="title-card">Enregistrement aujourd'hui</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">{registerToday}</span>
                    <span className="dash-card-right">
                      <box-icon name='calendar-alt' type='solid' color='#4547bf' ></box-icon>
                    </span>
                  </div>
                </div>

              </div>

              {/* Croissance par an */}
              <div className="card-content">
                <div className="dash-card dash-card-4">
                  <h4 className="title-card">Nombre d'acte enregistré par mois à l'année actuelle </h4>
                  {/* Chart diagramme en batton */}
                  <ChartRegistreParMois />
                  
                </div>
              </div>
              <div className="card-content chartRegister">
                <div className="dash-card dash-card-5" >
                  <h4 className="title-card">Taux de croissance par an au niveau de la naissance</h4>
                  {/* Chart diagramme par ligne*/}
                  <CroissantPerYear/>
                </div>
              </div>
            </div>
          </header>
          { /* <!-- ===== CARD 2 ===== --> */}
          <div className="card" id="card-2">
            <main className="main-main-content" id="main-main-content-2">CARD 2</main>
          </div>
    </>
  )
}

export default Dashboard;


