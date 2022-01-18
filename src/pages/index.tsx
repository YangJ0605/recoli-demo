import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { countState } from '../recoil'

export default memo(function index() {
  const [count, setCount] = useRecoilState(countState)
  const navigate = useNavigate()
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(v => v + 1)}>+1</button>
      <button onClick={() => navigate('/about', { replace: false })}>
        to about
      </button>
    </div>
  )
})
