export default async function fetcher(input, init) {
    const res = await fetch(input, init)
    return res.json()
}

export const bFetcher = (...args) => fetch(...args).then((res) => res.json())
