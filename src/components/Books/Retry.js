import React from 'react'
import { useSelector } from 'react-redux'
import { selectBooks, Status } from '../../store/books'
import { useHistory } from 'react-router-dom'

function Retry() {
  const history = useHistory()
  const { status } = useSelector(selectBooks)
  const Failure = status === Status.Failure

  if (!Failure) return null

  return (
    <button
      className={styles.button}
      onClick={() => {
        history.push('/')
      }}
    >
      다시하기
    </button>
  )
}

const styles = {
  button:
    'bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'
}

export default Retry
