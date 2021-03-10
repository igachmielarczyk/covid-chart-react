import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ( {updateDatas} ) => {

    // console.log(updateDatas);
    return (
        <div className="chart-line">
            <Line
                data={{
                labels: updateDatas.map((updateData) => updateData.date),
                datasets: [{
                    data: updateDatas.map((updateData) => updateData.confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: updateDatas.map((updateData) => updateData.deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                },  {
                    data: updateDatas.map((updateData) => updateData.recovered),
                    label: 'Recovered',
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 255, 0, 0.5)',
                    fill: true,
                },
                ],
                }}
            />
        </div>
    );
}

export default Chart;
