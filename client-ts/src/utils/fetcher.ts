import { request } from 'graphql-request'

const GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql'

type Fetcher = <TData, TVariables>(
  query: string,
  options?: RequestInit['headers']
) => (variables?: TVariables) => Promise<TData>

export const fetcher: Fetcher = (query, options = {}) => {
  return async variables => {
    try {
      const res = await request({
        url: GRAPHQL_ENDPOINT,
        document: query,
        variables,
        requestHeaders: { ...options },
      })

      return res
    } catch (error: any) {
      throw error
    }
  }
}
