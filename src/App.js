import { useState, useEffect } from 'react'
import axios from 'axios'
// components
import Word from './components/Word'
import Filter from './components/Filter'

const App = () => {
  const [words, setWords] = useState([])
  const [showAll, setShowAll] = useState('')

  const hook = () => {
    axios.get('https://raw.githubusercontent.com/jonschlinkert/common-words/master/words.json')
      .then((res) => setWords(res.data))
      .catch((err) => console.log(`Error: ${err}`))
  }

  useEffect(hook, [])

  const handleAllChange = event => setShowAll(event.target.value)

  const filterAll = showAll ? words.filter(w => w.rank.includes(showAll)) : words

  return (
    <div className='teste'>
      <main>
        <div className='container'>
          <Filter showAll={showAll} handleAllChange={handleAllChange} />

          <h2>The 100 most spoken English words</h2>
          <div className='list'>
            {filterAll.map((w, i) => <Word key={i} rank={w.rank} word={w.word} />)}
          </div>
        </div>
      </main>

      <footer>
        &copy; 2024 Cauber Markendorf Streck | All rights reserved.
      </footer>
    </div>
  )
}

export default App