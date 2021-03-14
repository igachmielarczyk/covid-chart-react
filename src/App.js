import {useState} from 'react';
import './App.css';
import Chart from './Chart';

function App() {

  const [month, setMonth] = useState(12);
  const [year, setYear] = useState(2020);
  const [country, setCountry] = useState('USA');
  const [updateDatas, setUpdateDatas] = useState([]);

  const getData  = async () => {
    const response = await fetch(`https://covidapi.info/api/v1/country/${country}/timeseries/${year}-${month}-1/${year}-${month}-30`);

    const data = await response.json();
    setUpdateDatas(data.result);
  }

  const updateYear = e => {
    setYear(e.target.value);
  };

  const updateMonth = e => {
    setMonth(e.target.value);
  };

  const updateCountry = e => {
    setCountry(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    getData(e);
  }

  return (
    <div className="App">
      <div className="form-container">
        <form className="chart-form" onSubmit={handleSubmit} >
          <input type="number" className="form-year" placeholder="select the year" name="year" min="2020" max="2021" value={year} onChange={updateYear} />
          <input type="number" className="form-month" placeholder="select the month" name="month" min="1" max="12" value={month} onChange={updateMonth} />

          <label htmlFor="country">Select the country</label>
          <select name="country" value={country} onChange={updateCountry} >
            <option value="IND">India</option>
            <option value="USA">United States of America</option>
            <option value="CZE">Czech Republic </option>
          </select>
          <button type="submit">Show chart</button>
        </form>
      </div>
      <Chart updateDatas={updateDatas} />
    </div>

  );
}

export default App;
