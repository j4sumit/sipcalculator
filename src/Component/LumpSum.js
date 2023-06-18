import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './LumpSum.css'

const LumpSum = () => {
  const [investment, setInvestment] = useState(500);
  const [returnRate, setReturnRate] = useState(1);
  const [timePeriod, setTimePeriod] = useState(1);

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  const handleReturnRateChange = (e) => {
    setReturnRate(e.target.value);
  };

  const handleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };
  let globalAmount;

  const calculateEstReturns = () => {
    const monthlyRate = returnRate / 12 / 100;
    const numPayments = timePeriod * 12;
    const amount = investment * (Math.pow(1 + monthlyRate, numPayments) - 1) / monthlyRate * (1 + monthlyRate);
    return amount;
  };
  
  // Call the function and assign the returned value to the global variable
  globalAmount = calculateEstReturns();


let investedamount = investment*timePeriod*12;
let estReturn = globalAmount-(investment*timePeriod*12);
  const data = {
    labels: ['Investment Amount', 'Est Returns'],
    datasets: [
      {
        data: [investment, estReturn],
        // backgroundColor: ['#98a4ff', '#5367ff'],
        backgroundColor: ['#98a4ff', '#5367ff'],
      },
    ],
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            flex: '0 0 60%',
            marginRight: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px', textAlign: 'left' }}>
              Monthly investment
            </label>
            <input
              type="text"
              value={`₹ ${investment}`}
              readOnly
              style={{
                width: '100px',
                backgroundColor: '#e5faf5',
                color: '#66e3c4',
                textAlign: 'right',
                paddingRight: '5px',
                border: 'none',
              }}
            />
          </div>
          <input
            type="range"
            min="500"
            max="100000"
            value={investment}
            onChange={handleInvestmentChange}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px', textAlign: 'left' }}>
              Expected return rate (p.a)
            </label>
            <input
              type="text"
              value={`${returnRate}%`}
              readOnly
              style={{
                width: '100px',
                backgroundColor: '#e5faf5',
                color: '#66e3c4',
                textAlign: 'right',
                paddingRight: '5px',
                border: 'none',
              }}
            />
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={returnRate}
            onChange={handleReturnRateChange}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px', textAlign: 'left' }}>
              Time Period
            </label>
            <input
              type="text"
              value={`${timePeriod} Yr`}
              readOnly
              style={{
                width: '100px',
                backgroundColor: '#e5faf5',
                color: '#66e3c4',
                textAlign: 'right',
                paddingRight: '5px',
                border: 'none',
              }}
            />
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={timePeriod}
            onChange={handleTimePeriodChange}
          />
        </div>
        <div style={{ flex: '0 0 40%' }}>
          <Doughnut data={data} />
        </div>
      </div>
{/* second div */}
      <div
        style={{
          marginTop: '20px',
          textAlign: 'left',
          // backgroundColor: '#e5faf5',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className='bottomCalc'>
            <div>
              Invested Amount: <span>{`₹ ${Math.round(investedamount)}` }</span> 
            </div>
            <div>
              Est. Returns: <span>{`₹ ${Math.round(estReturn)}`}</span>
            </div>
            <div>
              Total Value: <span>{`₹ ${Math.round(globalAmount)}`}</span>
            </div>
          </div>
          <button style={{
  background: "#00d09c",
  color: "#fff",
  textAlign: "center",
  width: "auto",
  height: "45px",

  display: "inline-block",
  fontWeight: "500",
  borderRadius: "4px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  position: "relative",
  border: 'none',
}}>INVEST NOW</button>

        </div>
      </div>
    </div>
  );
};

export default LumpSum;
