import {useEffect, useState} from 'react';
import './App.css';
import Chart from './Chart';
import {useForm} from "react-hook-form";

function App() {

  const [month, setMonth] = useState(12);
  const [year, setYear] = useState(2020);
  const [country, setCountry] = useState('USA');
  const [updateDatas, setUpdateDatas] = useState([]);

  const {register, handleSubmit} = useForm();

  useEffect(() => {
    getData();
  }, [month, year, country])

  const getData  = async () => {
    const response = await fetch(`https://covidapi.info/api/v1/country/${country}/timeseries/${year}-${month}-1/${year}-${month}-31`);

    const data = await response.json();
    setUpdateDatas(data.result);
    console.log(updateDatas);
  }

  const updateYear = e => {
    setYear(e.target.value);
    console.log(year);
  };

  const updateMonth = e => {
    setMonth(e.target.value);
    console.log(month);
  };

  const updateCountry = e => {
    setCountry(e.target.value);
    console.log(country);
  };

  const onSubmit = (dataForm) => {
    console.log(dataForm.year);
  }


  return (
    <div className="App">
      <div className="form-container">
        <form className="chart-form" onSubmit={handleSubmit(onSubmit)} >
          <input type="number" className="form-year" placeholder="select the year" name="year" min="2020" max="2021" value={year} onChange={updateYear} ref={register} />
          <input type="number" className="form-month" placeholder="select the month" name="month" min="1" max="12" value={month} onChange={updateMonth} ref={register} />

          <label htmlFor="country">Select the country</label>
          <select name="country" value={country} onChange={updateCountry} ref={register} >
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
