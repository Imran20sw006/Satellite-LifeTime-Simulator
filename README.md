"# Satellite-LifeTime-Simulator" 

Satellite Lifetime Probability Simulator
Overview
The Satellite Lifetime Probability Simulator is a web-based tool that calculates the probability of a satellite remaining operational over a given period. Users can determine the likelihood of a satellite "surviving" after a specified number of years or calculate the probability of it "dying" within a particular year range. This tool uses a Poisson process with a user-defined decay rate parameter (lambda) to model satellite survival.

Features
Lifetime Probability Calculation: Estimate the probability of a satellite surviving after a given number of years (Part A).
Time-Bounded Decay Probability: Determine the probability of a satellite ceasing operation within a specific year range (Part B).
User-Friendly Interface: A simple interface with fields for inputting years and lambda values, alongside instant result display.
Responsive Design: Works seamlessly across different screen sizes and devices.
File Structure
index.html: HTML file for structuring the user interface.
style.css: Stylesheet to control the layout, colors, and overall appearance.
script.js: JavaScript file with core functions for calculating the probability and updating results on the page.
Usage
Getting Started
Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/yourusername/satellite-lifetime-simulator.git
Open index.html in any web browser to access the simulator interface.
Using the Simulator
Part A: Satellite Still Alive Probability

Enter a lambda parameter value in the Enter Parameter for Lambda field.
Input the number of years (X) in the Enter years (X) field.
Click Calculate Probability to see the probability that the satellite is still operational after X years.
Part B: Satellite Death Probability Between Years

Enter the start year (A) and end year (B) in their respective fields.
Input a lambda parameter value.
Click Calculate Probability to view the probability that the satellite will no longer be operational between years A and B.
Example
To calculate the probability of a satellite surviving after 5 years with lambda = 0.4:

Enter 0.4 in the Lambda field.
Enter 5 in the Years field under Part A.
Click Calculate Probability to see the result.
Formula
The probability calculations are based on the exponential decay formula:

Survival Probability: 
𝑃(alive)=𝑒−𝜆×𝑋P(alive)=e −λ×X
 
Death Probability between A and B: 
𝑃(death between A and B)=(1−𝑒−𝜆×𝐵)−(1−𝑒−𝜆×𝐴)P(death between A and B)=(1−e −λ×B )−(1−e −λ×A )
Where:

𝜆
λ is the decay rate.
𝑋
X is the number of years.
A and B are the start and end years, respectively.
Contributing
Feel free to contribute by opening an issue or submitting a pull request if you'd like to improve the functionality or design of the simulator.

License
This project is licensed under the MIT License.

