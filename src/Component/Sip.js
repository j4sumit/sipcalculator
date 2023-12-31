import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Style.css";

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

let  newreturnRate = returnRate || 1;
let  newtimePeriod = timePeriod || 1;
let  newinvestment = investment || 500;

  const calculateEstReturns = () => {
    const monthlyRate = newreturnRate / 12 / 100;
    const numPayments = newtimePeriod * 12;
    const amount =
      ((newinvestment * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
        monthlyRate) *
      (1 + monthlyRate);
    return amount;
  };


  let globalAmount = calculateEstReturns();
  let investedamount = newinvestment * newtimePeriod * 12 ;
  let estReturn = globalAmount - investedamount;

  const data = {
    labels: ["Investment Amount", "Est Returns"],
    datasets: [
      {
        data: [Math.round(newinvestment), Math.round(estReturn)],
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
    <div className="main-div">
      <div style={{ display: "flex" }}>
        <div className="left-div">
          <div className="left-1std">
            <label>Monthly investment</label>
            <div
              className="span-text"
              style={{
                ...inputStyles(investment, 500, 100000),
              }}
            >
              <span>₹</span>
              <input type="number" value={investment} min="500" max="100000"
               style={{
                  color: inputStyles(investment, 500, 100000).color,
                }}
                placeholder="0"
                onChange={texthandleInvestmentChange}
              />
            </div>
          </div>
          <input
            className="range-slider" type="range" min="500" max="100000" value={investment||0}
            onChange={rangehandleInvestmentChange}
            style={{
              background: `linear-gradient(to right, #00d09c 0%, #00d09c ${
                ((investment - 500) / (100000 - 500)) * 100
              }%, #ecedef ${
                ((investment - 500) / (100000 - 500)) * 100
              }%, #ecedef 100%)`,
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label>Expected return rate (p.a)</label>
            <div
              className="span-text"
              style={{
                ...inputStyles(returnRate, 1, 30),
              }}
            >
              <input type="number" value={returnRate} min="1" max="30"
                style={{
                  color: inputStyles(returnRate, 1, 30).color,
                }}
                placeholder="0"
                onChange={texthandleReturnRateChange}
              />
              <span>%</span>
            </div>
          </div>
          <input className="range-slider" type="range" min="1" max="30" value={returnRate||0}
            onChange={rangehandleReturnRateChange}
            style={{
              background: `linear-gradient(to right, #00d09c 0%, #00d09c ${
                ((returnRate - 1) / (30 - 1)) * 100
              }%, #ecedef ${
                ((returnRate - 1) / (30 - 1)) * 100
              }%, #ecedef 100%)`,
            }}
          />
          <div className="left-1std">
            <label style={{ marginRight: "10px", textAlign: "left" }}>
              Time Period
            </label>
            <div
              className="span-text"
              style={{
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
            className="range-slider" type="range" min="1" max="40" value={timePeriod||0}
            onChange={rangehandleTimePeriodChange}
            style={{
              background: `linear-gradient(to right, #00d09c 0%, #00d09c ${
                ((timePeriod - 1) / (40 - 1)) * 100
              }%, #ecedef ${
                ((timePeriod - 1) / (40 - 1)) * 100
              }%, #ecedef 100%)`,
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
              Invested Amount: <span>{`₹ ${Math.round(investedamount)}`}</span>
            </div>
            <div>
              Est. Returns: <span>{`₹ ${Math.round(estReturn)}`}</span>
            </div>
            <div>
              Total Value: <span>{`₹ ${Math.round(globalAmount)}`}</span>
            </div>
          </div>
          <button>INVEST NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Sip;
