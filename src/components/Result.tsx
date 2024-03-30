import { calculateInvestmentResults, formatter } from "../util/investment.js";
const Result = ({ userInput }) => {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);
  return (
    <>
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Investment Value</th>
          <th> Interest (Year)</th>
          <th>Total Interest</th>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalAmountINvested = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(totalAmountINvested)}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Result;
