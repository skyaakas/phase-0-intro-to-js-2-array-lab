// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(Broom){
    const newCats = [...cats];
    newCats.push(Broom);
    return newCats;

}

function prependCat(Arnold){
    const newCats = [...cats];
    newCats.unshift(Arnold);
    return newCats;
}

function removeLastCat(){
    const newCats = cats.slice();
    newCats.pop();
    return newCats;
}

function removeFirstCat(){
    const newCats = cats.slice();
    newCats.shift();
    return newCats;
}