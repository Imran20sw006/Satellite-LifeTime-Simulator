function calculateAlive() {
    const x = parseFloat(document.getElementById("yearsAlive").value);
    const lambda = parseFloat(document.getElementById("lambda").value);

    if (isNaN(x) || x < 1) {
        document.getElementById("resultAlive").innerText = "Please enter a valid number of years.";
        return;
    }

    if (isNaN(lambda) || lambda <= 0) {
        document.getElementById("resultAlive").innerText = "Please enter a valid lambda value.";
        return;
    }

    const survivalProbability = Math.exp(-lambda * x);
    const percentage = (survivalProbability * 100).toFixed(2);

    document.getElementById("resultAlive").innerText = 
        `Probability that the satellite is still alive after ${x} years: 
        ${survivalProbability.toFixed(4)} OR (${percentage}%)`;
}

function calculateDeath() {
    const a = parseFloat(document.getElementById("startYear").value);
    const b = parseFloat(document.getElementById("endYear").value);
    const lambda = parseFloat(document.getElementById("lambda").value);

    if (isNaN(a) || isNaN(b) || a < 1 || b < 1 || a >= b) {
        document.getElementById("resultDeath").innerText = "Please enter valid start and end years (A < B).";
        return;
    }

    if (isNaN(lambda) || lambda <= 0) {
        document.getElementById("resultDeath").innerText = "Please enter a valid lambda value.";
        return;
    }

    const probabilityA = 1 - Math.exp(-lambda * a);
    const probabilityB = 1 - Math.exp(-lambda * b);
    const deathProbability = probabilityB - probabilityA;
    const percentage = (deathProbability * 100).toFixed(2);

    document.getElementById("resultDeath").innerText = 
        `Probability that the satellite dies between ${a} and ${b} years: 
        ${deathProbability.toFixed(4)} OR (${percentage}%)`;
}
