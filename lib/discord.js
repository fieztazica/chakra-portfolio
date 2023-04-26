import { team } from '../data/team'
import fetcher from './fetcher'

const bot_token = process.env.DISCORD_TOKEN
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID
export const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

export const baseEndpoint = 'https://discord.com/api/v10'

export function getUser(id) {
    return fetcher(`${baseEndpoint}/users/${id}`, {
        headers: {
            Authorization: `Bot ${bot_token}`,
        },
    })
}

export function getGuildMembers() {
    return fetcher(
        `${baseEndpoint}/guilds/${DISCORD_GUILD_ID}/members?limit=100`,
        {
            headers: {
                Authorization: `Bot ${bot_token}`,
            },
        }
    )
}

export async function getCoreTeam() {
    const guildMembers = await getGuildMembers()

    const coreTeam = await guildMembers
        .filter((member) => {
            const discordIds = team.map((m) => m.discordId)
            return !member.user.bot && discordIds.includes(member.user.id)
        })
        .map((member) => {
            return {
                ...member,
                more: team.find((tm) => tm.discordId === member.user.id),
            }
        })

    return JSON.parse(JSON.stringify(coreTeam))
}

export function webhookPost(data) {
    return fetch(`${DISCORD_WEBHOOK_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
