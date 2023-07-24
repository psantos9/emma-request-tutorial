import axios from 'axios'

export const sum = (a: number, b: number): number => a + b // synchronous method

export interface IQuote {
  q: string
  a: string
  c: string
  h: string
}

export type Response = IQuote[]

export const getQuote = async (): Promise<string> => { // runs asynchronously
  // Promises in Javascript
  const response = await axios.get<Response>('https://zenquotes.io/api/quotes')
  const quotes = response.data
  const quote = quotes.at(0)?.q ?? 'got no quote!'
  return quote
}

const getBearerToken = async (apitoken: string, host: string): Promise<string> => {
  
}