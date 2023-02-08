function cToF(celsius)
{
    let fahrenheit=(celsius*(9/5))+32;
    console.log(`${celsius}\xB0C is ${fahrenheit}\xB0F`);

}
function fToC(fahrenheit)
{
    let celsius=((fahrenheit-32)*5)/9
    console.log(`${fahrenheit}\xB0F is ${celsius}\xB0C`);

}
cToF(60);
fToC(45);