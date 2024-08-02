import CroissantPerYear from "../../components/chart/CroissantPerYear";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./dashboard.css";
import 'boxicons';
import ChartWork from "../../components/chart/ChartWork";
import ChartActMaiage from "../../components/chart/ChartActMaiage";


Chart.register(CategoryScale);

const Dashboard = () => {

  /**const [chartData, setChartData] = useState({
    // ...chart data
  });*/


  return (
    <>
          { /* <!-- ===== HEADER CARD 1 ===== --> */}
          <header className="main-header-content">
            <h3 className="main-header-content-title">Tableau de bord</h3>
            <span className="main-header-content-subtitle">Soutitre page</span>
            <div className="dashboard-container">
              <div className="card-content">
                <div className="dash-card dash-card-1">
                  <h4 className="title-card">Utilisateur</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">2 &nbsp; </span>
                    <span className="dash-card-right">
                      <box-icon name='group' type='solid' color='#4547bf' fill='48px'></box-icon>
                    </span>
                  </div>
                </div>
                <div className="dash-card dash-card-2">
                  <h4 className="title-card">Acte</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">100 &nbsp; </span>
                    <span className="dash-card-right">
                      <box-icon name='calendar-alt' type='solid' color='#4547bf' ></box-icon>
                    </span>
                  </div>
                </div>
                <div className="dash-card dash-card-3">
                  <h4 className="title-card">Acte de naissance</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">50 &nbsp; </span>
                    <span className="dash-card-right">
                      <box-icon name='calendar-alt' type='solid' color='#4547bf' ></box-icon>
                    </span>
                  </div>
                </div>
                <div className="dash-card dash-card-3">
                  <h4 className="title-card">Acte de Mariage</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">50 &nbsp; </span>
                    <span className="dash-card-right">
                      <box-icon name='calendar-alt' type='solid' color='#4547bf' ></box-icon>
                    </span>
                  </div>
                </div>
                <div className="dash-card dash-card-3">
                  <h4 className="title-card">Acte de Divorce</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">50 &nbsp; </span>
                    <span className="dash-card-right">
                      <box-icon name='calendar-alt' type='solid' color='#4547bf' ></box-icon>
                    </span>
                  </div>
                </div>
                <div className="dash-card dash-card-3">
                  <h4 className="title-card">Acte de Décé</h4>
                  <div className="dash-card-content">
                    <span className="dash-card-left">50 &nbsp; </span>
                    <span className="dash-card-right">
                      <box-icon name='calendar-alt' type='solid' color='#4547bf' ></box-icon>
                    </span>
                  </div>
                </div>
              </div>

              {/* Croissance par an */}
              <div className="card-content">
                <div className="dash-card dash-card-4">
                  <h4 className="title-card">Taux de croissance par an au niveau de la naissance</h4>
                  <CroissantPerYear />
                </div>
              </div>
              <div className="card-content chartWork">
                <div className="dash-card dash-card-5" >
                  <h4 className="title-card">Taux de croissance par an au niveau du décé </h4>
                  <ChartWork />
                </div>
                <div className="dash-card dash-card-6">
                  <h4 className="title-card">Taux de croissance par an au niveau du divorce  </h4>
                  <ChartActMaiage />
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


