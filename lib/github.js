import fetcher from './fetcher'

const baseEndpoint = 'https://api.github.com'
const OWNER = 'fiezt1492'

export function getRepo(repo) {
    return fetcher(`${baseEndpoint}/repos/${OWNER}/${repo}`)
}

export function getOwnerRepos(
    page = 1,
    per_page = 30,
    type = 'owner',
    sort = 'full_name',
    direction = 'asc'
) {
    return fetcher(
        `${baseEndpoint}/users/${OWNER}/repos?page=${page}&per_page=${per_page}&type=${type}&sort=${sort}&direction=${direction}`
    )
}

export function getUser(USERNAME) {
    return fetcher(`${baseEndpoint}/users/${USERNAME}`)
}
