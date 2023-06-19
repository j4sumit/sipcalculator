import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Sip.css";

const Sip = () => {
  const [investment, setInvestment] = useState(2500);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const texthandleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };
  const rangehandleInvestmentChange = (event) => {
    setInvestment(event.target.value);
  };

  const texthandleReturnRateChange = (e) => {
    setReturnRate(e.target.value);
  };
  const rangehandleReturnRateChange = (e) => {
    setReturnRate(e.target.value);
  };

  const texthandleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };
  const rangehandleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };


  let globalAmount;

  const calculateEstReturns = () => {
    const monthlyRate = returnRate / 12 / 100;
    const numPayments = timePeriod * 12;
    const amount =
      ((investment * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
        monthlyRate) *
      (1 + monthlyRate);
    return amount;
  };

  // Call the function and assign the returned value to the global variable
  globalAmount = calculateEstReturns();

  let investedamount = investment * timePeriod * 12;
  let estReturn = globalAmount - investment * timePeriod * 12;
  const data = {
    labels: ["Investment Amount", "Est Returns"],
    datasets: [
      {
        data: [investment, estReturn],
        // backgroundColor: ['#98a4ff', '#5367ff'],
        backgroundColor: ["#98a4ff", "#5367ff"],
      },
    ],
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: "0 0 60%",
            marginRight: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <label style={{ marginRight: "10px", textAlign: "left" }}>
              Monthly investment
            </label>
            <input
              type="text"
              value={`\u20B9 ${investment}`}
              min="-Infinity"
              max="100000"
              placeholder="0"
              onChange={texthandleInvestmentChange} 
              style={{
                width: "100px",
                backgroundColor: "#e5faf5",
                color: "#66e3c4",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
              }}
            />
          </div>
          <input
            type="range"
            min="500"
            max="100000"
            value={investment}
            onChange={rangehandleInvestmentChange}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <label style={{ marginRight: "10px", textAlign: "left" }}>
              Expected return rate (p.a)
            </label>
            <input
              type="text"
              value={`${returnRate}\u0025`}
              onChange={texthandleReturnRateChange}
              min="1"
              max="30"
              placeholder="0"
              style={{
                width: "100px",
                backgroundColor: "#e5faf5",
                color: "#66e3c4",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
              }}
            />
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={returnRate}
            onChange={rangehandleReturnRateChange}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <label style={{ marginRight: "10px", textAlign: "left" }}>
              Time Period
            </label>
            <input
              type="text"
              value={`${timePeriod} Yr`}
              min="1"
            max="40"
            placeholder="0"
              onChange={texthandleTimePeriodChange}
              style={{
                width: "100px",
                backgroundColor: "#e5faf5",
                color: "#66e3c4",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
              }}
            />
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={timePeriod}
            onChange={rangehandleTimePeriodChange}
          />
        </div>
        <div style={{ flex: "0 0 40%" }}>
          <Doughnut data={data} />
        </div>
      </div>
      {/* second div */}
      <div
        style={{
          marginTop: "20px",
          textAlign: "left",
          // backgroundColor: '#e5faf5',
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="bottomCalc">
            <div>
              Invested Amount: <span>{`₹ ${Math.round(investedamount)}`}</span>
            </div>
            <div>
              Est. Returns: <span>{`₹ ${Math.round(estReturn)}`}</span>
            </div>
            <div>
              Total Value: <span>{`₹ ${Math.round(globalAmount)}`}</span>
            </div>
          </div>
          <button
            style={{
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
              border: "none",
            }}
          >
            INVEST NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sip;
