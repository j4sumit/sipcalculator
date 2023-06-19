import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./LumpSum.css";

const LumpSum = () => {
  const [investment, setInvestment] = useState(2500);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  // const [compoundedInterests, setCompoundedInterests] = useState(1);

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

  // const handleCompoundedInterestsChange = (e) => {
  //   setCompoundedInterests(e.target.value);
  // };

  const calculateEstReturns = () => {
    const compoundedInterests=1;
    const n = compoundedInterests;
    const t = timePeriod;
    const r = returnRate / 100;
    const amount = investment * Math.pow((1 + r / n), n * t);
    return amount;
  };

  const globalAmount = calculateEstReturns();
  const investedamount = investment;
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <label style={{ marginRight: "10px", textAlign: "left" }}>
              Total investment
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
                backgroundColor: "#e5faf5",
                color: "#00d09c",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
                ...inputStyles(investment, 500, 100000),
              }}
            >
              <span>₹</span>
              <input type="number" value={investment} min="500" max="100000" placeholder="0"
                style={{
                  color: inputStyles(investment, 500, 100000).color,
                }}
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
            style={{
              background: `linear-gradient(to right, #00d09c 0%, #00d09c ${((investment - 500) / (100000 - 500)) * 100}%, #ecedef ${((investment - 500) / (100000 - 500)) * 100}%, #ecedef 100%)`,
              appearance: "none",
              height: "5px",
              outline: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <label style={{ marginRight: "10px", textAlign: "left" }}>
              Expected return rate (p.a)
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
                backgroundColor: "#e5faf5",
                color: "#00d09c",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
                ...inputStyles(returnRate, 1, 30),
              }}
            >
              <input
                type="number" value={returnRate} min="1" max="30" placeholder="0"
                style={{
                  color: inputStyles(returnRate, 1, 30).color,
                }}
                onChange={texthandleReturnRateChange}
              />
              <span>%</span>
            </div>
          </div>
          <input
            type="range" min="1" max="30" value={returnRate}
            onChange={rangehandleReturnRateChange}
            style={{
              background: `linear-gradient(to right, #00d09c 0%, #00d09c ${((returnRate - 1) / (30 - 1)) * 100}%, #ecedef ${((returnRate - 1) / (30 - 1)) * 100}%, #ecedef 100%)`,
              appearance: "none",
              height: "5px",
              outline: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <label style={{ marginRight: "10px", textAlign: "left" }}>
              Time period
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
                backgroundColor: "#e5faf5",
                color: "#00d09c",
                textAlign: "right",
                paddingRight: "5px",
                border: "none",
                ...inputStyles(timePeriod, 1, 40),
              }}
            >
              <input type="number" value={timePeriod} min="1" max="40" placeholder="0"
                style={{
                  color: inputStyles(timePeriod, 1, 40).color,
                }}
                onChange={texthandleTimePeriodChange}
              />
              <span>Yr</span>
            </div>
          </div>
          <input
            type="range" min="1" max="40" value={timePeriod}
            onChange={rangehandleTimePeriodChange}
            style={{
              background: `linear-gradient(to right, #00d09c 0%, #00d09c ${((timePeriod - 1) / (40 - 1)) * 100}%, #ecedef ${((timePeriod - 1) / (40 - 1)) * 100}%, #ecedef 100%)`,
              appearance: "none",
              height: "5px",
              outline: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
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

export default LumpSum;
