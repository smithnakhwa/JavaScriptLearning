function position(str)
{
    let sub=str.slice(4,4+6);
    return sub=="Script";
}
console.log(position("JavaScript"));
console.log(position("CoffeeScript"));
console.log(position("SmithScript"));