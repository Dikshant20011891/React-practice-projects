import React from 'react'

const Calculator = ({ principleAmount, monthlyContribution, interestRate, years}) => {
    // A = P(1 + r/n)^nt
    const A = {
    P: principleAmount,
    r: interestRate / 100,
    n: 12,
    t: years,
    PMT: monthlyContribution,
  }
  // PMT x {[(1 + r/n)^nt - 1] / (r/n)}
    return (
    <div>
    $ {" "}
    { A.PMT === null ? (A.P * Math.pow(1 + A.r / A.n, A.n * A.t)).toFixed(2)
    : (A.P * Math.pow(1 + A.r / A.n, A.n * A.t) + A.PMT * ((Math.pow(1 + A.r / A.n, A.n * A.t) - 1) / (A.r / A.n))).toFixed(2)}
    </div>
  )
}

export default Calculator
