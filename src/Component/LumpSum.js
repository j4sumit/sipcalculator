import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './LumpSum.css';

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

  const calculateEstReturns = () => {
    const monthlyRate = returnRate / 12 / 100;
    const numPayments = timePeriod * 12;

    const amount =
      investment *
      ((Math.pow(1 + monthlyRate, numPayments) - 1) / monthlyRate) *
      (1 + monthlyRate);

    return amount.toFixed(2);
  };

  const totalValue = parseFloat(investment) + parseFloat(calculateEstReturns());

  const data = {
    labels: ['Investment Amount', 'Est Returns'],
    datasets: [
      {
        data: [investment, totalValue],
        backgroundColor: ['#98a4ff', '#5367ff'],
        hoverBackgroundColor: ['#98a4ff', '#5367ff'],
      },
    ],
  };

  return (
    <div className="LumpSum-container">
      <div className="row">
        <div className="left-column">
          <div className="input-container">
            <label>Monthly investment</label>
            <input
              type="text"
              value={`₹ ${investment}`}
              readOnly
              className="input-text"
            />
          </div>
          <input
            type="range"
            min="500"
            max="100000"
            value={investment}
            onChange={handleInvestmentChange}
          />
          <div className="input-container">
            <label>Expected return rate (p.a)</label>
            <input
              type="text"
              value={`${returnRate}%`}
              readOnly
              className="input-text"
            />
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={returnRate}
            onChange={handleReturnRateChange}
          />
          <div className="input-container">
            <label>Time Period</label>
            <input
              type="text"
              value={`${timePeriod} Yr`}
              readOnly
              className="input-text"
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
        <div className="right-column">
          <Doughnut data={data} />
        </div>
      </div>
      <div className="result-container">
        <div className="result-item">
          <span>Invested Amount:</span>
          <span>₹ 0</span>
        </div>
        <div className="result-item">
          <span>Est. Returns:</span>
          <span>₹ 0</span>
        </div>
        <div className="result-item">
          <span>Total Value:</span>
          <span>₹ {totalValue}</span>
        </div>
        <button>INVEST NOW</button>
      </div>
    </div>
  );
};

export default LumpSum;