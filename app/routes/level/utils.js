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
    answer: null
  }
}

export function checkAnswer(correctProp) {
  const { answer, currentCard } = this.state
  if (answer) {
    guess = answer.toLowerCase().trim()
    correct = currentCard[correctProp].toLowerCase().trim()

    if (guess === correct) this.updateCurrentWord(true)
    else this.updateCurrentWord(false)
  }
}