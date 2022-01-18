import {
  atom,
  selector,
  atomFamily,
  selectorFamily,
  useRecoilCallback
} from 'recoil'

export const countState = atom({
  key: 'countAtom',
  default: 1
})

export const countStateF = atomFamily({
  key: 'countAtom',
  default: 333333
})
const request = () => {
  return new Promise(r => {
    console.log('resolve')
    setTimeout(() => {
      r('data')
    }, 2000)
  })
}

export const powerCountState = selector({
  key: 'powerCountState',
  get: ({ get }) => {
    const count = get(countState)
    return count * 2
  }
})

export const asyncData = selectorFamily<string, { id: number }>({
  key: 'asyncData',
  get:
    ({ id }) =>
    async ({ get }) => {
      const res = await request()
      return res as string
    }
})

export const asyncDefaultData = atom({
  key: 'asyncDefaultData',
  default: selector({
    key: 'asyncDefaultData/default',
    get: ({ get }) => {
      const res = get(asyncData({ id: 1 }))
      return res
    }
  })
})
