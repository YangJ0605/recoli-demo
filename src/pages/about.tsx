import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { countState } from '../recoil'

export default memo(function about() {
  const count = useRecoilValue(countState)
  const navigate = useNavigate()
  console.log('render')
  return (
    <div>
      <p>about</p>
      <p>{count}</p>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  )
})
