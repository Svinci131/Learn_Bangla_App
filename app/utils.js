export const getRandomListIndex = (list) => {
    let listLength  = (list.length)-1
    let randomIndex = Math.floor(Math.random()*(listLength))
    return randomIndex
}
export function getUpdatedData (words, currentIndex, shouldRemove) {
  console.log('here', shouldRemove)
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

  if (guess === correct) this._updateCurrentWord(true)
  else this._updateCurrentWord(false)
}