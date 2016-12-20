export const getRandomListIndex = (list) => {
    let listLength  = (list.length)-1
    let randomIndex = Math.floor(Math.random()*(listLength))
    return randomIndex
}

export function getUpdatedData (words, currentIndex, shouldRemove) {
  if (shouldRemove) {
    words.splice(currentIndex, 1)
  }
  let randomIndex = getRandomListIndex(words)
  let word = words[randomIndex]
  return {
    currentCard: word,
    index: randomIndex,
    words: words,
    answer: 'hi'
  }
}

export function checkAnswer(correctProp) {
  const { answer, currentCard } = this.state
  guess = answer.toLowerCase().trim()
  correct = currentCard[correctProp].toLowerCase().trim()

  if (guess === correct) this.updateCurrentWord(true)
  else this.updateCurrentWord(false)
}

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
    console.log(letters, 'letters')
    return (letters)
}