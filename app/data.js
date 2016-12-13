import vocab from '../resources/vocab'

const Vocab = {
  topics: []
}

export const getTopics = () => {
  if (!Vocab.topics.length) {
    Vocab.topics = Object.keys(vocab).reduce(
    ( arr, currentItem) => {
      let firstKey = (Object.keys(vocab[currentItem])[0])
      let topic    = { title: currentItem,
                      mainImg: vocab[currentItem][firstKey].img['04'] 
                    }
      return arr.concat([topic]) 
    }, []);
  }
  return Vocab.topics
}

export const getWords = (topic) => (
  Object.keys(vocab[topic]).map(word => {
      let wordObj = vocab[topic][word]
      return wordObj
  })
)