import React, { useEffect, useRef, useState } from 'react'
import FormGroup from '../components/FormGroup'
import Calculator from './Calculator'

const CompoundInterestCal = () => {
    let inputPrincipal = useRef(null)
    const [compound, setCompound] = useState({
        principalAmount: "",
        monthlyContribution: null,
        interestRate: "",
        years: "",
    })

    useEffect(() => {
        inputPrincipal.current.focus()
    }, [])

    document.body.style.backgroundColor = "#2174af"

  return (
    <div className='container'>
      <div className="card card-primary bg-warning shadow-md text-dark m-auto mt-4"
        style={{ maxWidth: 300 }}
      >
        <div className="card-body">
            <FormGroup 
                labelText={"Principle Amount $"} 
                inputType={"number"}
                values={compound.principalAmount}
                reference={inputPrincipal}
                onChange={ (e) => setCompound({...compound, principalAmount: e.target.value}) }
            />{" "}
            <FormGroup 
                labelText={"Monthly contribution $"} 
                inputType={"number"}
                values={compound.monthlyContribution}
                onChange={ (e) => setCompound({...compound, monthlyContribution: e.target.value}) }
            />{" "}
            <FormGroup 
                labelText={"Interest Rate $"} 
                inputType={"number"}
                values={compound.interestRate}
                onChange={ (e) => setCompound({...compound, interestRate: e.target.value}) }
            />{" "}
            <FormGroup 
                labelText={"Years of Investment"} 
                inputType={"number"}
                values={compound.years}
                onChange={ (e) => setCompound({...compound, years: e.target.value}) }
            />
        </div>
        <div className="card-footer text-right fs-lg">
            <Calculator 
                principleAmount={compound.principalAmount}
                monthlyContribution={compound.monthlyContribution}
                interestRate={compound.interestRate}
                years={compound.years}
            />
        </div>
      </div>
    </div>
  )
}


export default CompoundInterestCal
