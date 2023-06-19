import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Sip.css";

const Sip = () => {
  const [investment, setInvestment] = useState(2500);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const texthandleInvestmentChange = (e) => {
    if (e.target.value > 100000) {
      return;
    }
    setInvestment(e.target.value);
  };

  const rangehandleInvestmentChange = (event) => {
    setInvestment(event.target.value);
  };

  const texthandleReturnRateChange = (e) => {
    if (e.target.value > 30) {
      return;
    }
    setReturnRate(e.target.value);
  };

  const rangehandleReturnRateChange = (e) => {
    setReturnRate(e.target.value);
  };

  const texthandleTimePeriodChange = (e) => {
    if (e.target.value > 40) {
      return;
    }
    setTimePeriod(e.target.value);
  };

  const rangehandleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };

  const calculateEstReturns = () => {
    const monthlyRate = returnRate / 12 / 100;
    const numPayments = timePeriod * 12;
    const amount =
      ((investment * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
        monthlyRate) *
      (1 + monthlyRate);
    return amount;
  };

  const globalAmount = calculateEstReturns();
  const investedamount = investment * timePeriod * 12;
  const estReturn = globalAmount - investedamount;

  const data = {
    labels: ["Investment Amount", "Est Returns"],
    datasets: [
      {
        data: [Math.round(investment), Math.round(estReturn)],
        backgroundColor: ["#98a4ff", "#5367ff"],
      },
    ],
  };

  const inputStyles = (value, min, max) => {
    if (value < min || value > max) {
      return {
        color: "#eb5b3c",
        backgroundColor: "#fae9e5",
      };
    }
    return {};
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
                backgroundColor: "#e5faf5",
                color: "#66e3c4",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
                ...inputStyles(investment, 500, 100000),
              }}
            >
              <span>₹</span>
              <input
                type="number"
                value={investment}
                min="500"
                max="100000"
                style={{
                  color: inputStyles(investment, 500, 100000).color,
                }}
                placeholder="0"
                onChange={texthandleInvestmentChange}
              />
            </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
                backgroundColor: "#e5faf5",
                color: "#66e3c4",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
                ...inputStyles(returnRate, 1, 30),
              }}
            >
              <input
                type="number"
                value={returnRate}
                min="1"
                max="30"
                style={{
                  color: inputStyles(returnRate, 1, 30).color,
                }}
                placeholder="0"
                onChange={texthandleReturnRateChange}
              />
              <span>%</span>
            </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
                backgroundColor: "#e5faf5",
                color: "#66e3c4",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
                ...inputStyles(timePeriod, 1, 40),
              }}
            >
              <input
                type="number"
                value={timePeriod}
                min="1"
                max="40"
                style={{
                  color: inputStyles(timePeriod, 1, 40).color,
                }}
                placeholder="0"
                onChange={texthandleTimePeriodChange}
              />
              <span>Yr</span>
            </div>
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
              Invested Amount:{" "}
              <span>{`₹ ${Math.round(investedamount)}`}</span>
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