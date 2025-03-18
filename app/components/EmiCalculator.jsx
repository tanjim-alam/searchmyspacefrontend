"use client"
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(30);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = loanTenure * 12;
    
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    return emi.toFixed(2);
  };

  const totalPayment = (calculateEMI() * loanTenure * 12).toFixed(2);
  const totalInterest = (totalPayment - loanAmount).toFixed(2);

  const data = [
    { name: "Principal loan amount", value: parseFloat(loanAmount) },
    { name: "Total interest", value: parseFloat(totalInterest) },
  ];
  const COLORS = ["#8f3569", "#1face2"];

  return (
    <div className=" mx-auto flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        {/* <h2 className="text-2xl font-semibold text-gray-700 mb-4">Real Estate EMI Calculator</h2> */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600">Loan Amount (₹)</label>
            <input
              type="number"
              className="w-full p-2 border rounded mt-1"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-600">Interest Rate (%)</label>
            <input
              type="number"
              className="w-full p-2 border rounded mt-1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-gray-600">Loan Tenure (Years)</label>
            <input
              type="number"
              className="w-full p-2 border rounded mt-1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
            />
          </div>
          <div className="text-center bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-[var(--primary)]">₹ {calculateEMI()}</h3>
            <p className="text-gray-600">Monthly EMI</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold">Interest to be paid: <span className="text-black">₹ {totalInterest}</span></p>
            <p className="font-semibold">Total of Payments (Principal + Interest): <span className="text-black">₹ {totalPayment}</span></p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold text-gray-700 text-center">Break-up of Total Payment</h2>
        <PieChart width={300} height={300} className="mx-auto">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
