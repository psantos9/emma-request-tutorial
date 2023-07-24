import { sum, getQuote } from './businessLogic'

it('computes the sum of two numbers', async () => {
  const a = 1
  const b = 2
  const c = sum(1, 2)
  expect(c).toBe(a + b)
})

it('gets a quote from an external api', async () => {
  const quote = await getQuote()
  expect(typeof quote).toBe('string')
})
