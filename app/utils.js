const Entities = require('html-entities').AllHtmlEntities;
export const convertFromHex = (bLetters)=> {
    var hexEntities = bLetters; 
    hexEntities = hexEntities.split(";");
    hexEntities = hexEntities.slice(0, hexEntities.length-1)
    entities = new Entities();
    var arr = hexEntities.reduce(function(arr, curr){
        var Char = entities.decode(""+curr+";")
        arr.push( Char);
        return arr;
    }, []);

    var letters = arr.join(" ")
    return (letters)
}

export const getLast = (array) => {
  return array[array.length-1]
}

export const toTitleCase = (string) => {
  return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase()
}