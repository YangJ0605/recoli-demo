import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import {
  powerCountState,
  countState,
  asyncData,
  asyncDefaultData,
  countStateF
} from './recoil'

function App() {
  const value1 = useRecoilValue(countState)
  const value2 = useRecoilValue(powerCountState)
  const asyncValue = useRecoilValue(asyncData({ id: 1 }))
  const asyncDefaultValue = useRecoilValue(asyncDefaultData)
  const [atomfff, setAtomfff] = useRecoilState(countStateF(0))

  const [count, setCount] = useRecoilState(countState)
  console.log(atomfff)

  useEffect(() => {
    setAtomfff(c => c + 1)
  }, [])

  return (
    <div className='App'>
      <h4>{value1}</h4>
      <h4>{value2}</h4>
      <h4>{count}</h4>
      <h4>{asyncValue}</h4>
      <h4>{asyncDefaultValue}</h4>
      <button onClick={() => setAtomfff(c => c + 1)}>+1</button>
    </div>
  )
}

export default App
