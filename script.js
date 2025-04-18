const salary = (wage, hours, days) => {
  return Math.round(wage * hours * days);
};

const taxed = (salary, taxPercentage) => {
  return Math.round((salary * (100 - taxPercentage)) / 100);
};

const wage = 400;
const hours = 6;
const days = 21;
const beforeTaxation = salary(wage, hours, days);
const afterTaxation = taxed(beforeTaxation, 15);

document.body.innerHTML += `
	<p>Wage: ${wage} Kč</p>
	<p>Hours: ${hours}</p>
	<p>Days: ${days}</p>
	<p>Before taxation: ${beforeTaxation} Kč</p>
	<p>After taxation: ${afterTaxation} Kč</p>
`;
