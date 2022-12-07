/*ex19: Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
        In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
        Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.*/
// Only change code below this line
class Thermostat 
{
    constructor(value) 
    {
        this.value = value;
    }

    get temperature() 
    {
        let C = 5 / 9 * (this.value - 32);
        return C;
    }

    set temperature(updateValue) 
    {

        this.value = (updateValue * 9.0) / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius