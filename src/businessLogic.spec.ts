import { sum, getQuote, getBearerToken } from './businessLogic'

it('computes the sum of two numbers', async () => {
  const a = 1
  const b = 2
  const c = sum(1, 2)
  expect(c).toBe(a + b)
})

it('gets a quote from an external api', async () => {
  const quotes: string[] = []
  for (let i = 0; i < 50; i++) {
    const quote = await getQuote()
    quotes.push(quote)
  }
  expect(Array.isArray(quotes)).toBe(true)
  expect(quotes.length).toEqual(50)
}, 50000)

// https://docs.leanix.net/docs/authentication
it('gets a bearer token from an apitoken', async () => {
  const apitoken = ''
  const instance = ''
  const bearerToken = await getBearerToken(apitoken, instance)
  expect(typeof bearerToken).toBe('string')
})
