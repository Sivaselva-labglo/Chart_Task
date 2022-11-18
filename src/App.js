import logo from './logo.svg';
import './App.css';
import Barchart from './barChart';
import Areachart from './areaChart';
import Linechart from './lineChart';
import Piechart from './pieChart';
import AreaFinancial from './areaFinancial';
import Barfinance from './barFinance';

function App() {
  return (
    <div>
        {/* <Barchart /> */}
        {/* <Areachart /> */}
        <Linechart />
        {/* <Piechart /> */}
        <AreaFinancial />
        {/* <Barfinance /> */}
    </div>
  );
}

export default App;
