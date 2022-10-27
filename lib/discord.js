import fetcher from "./fetcher";

const bot_token = process.env.DISCORD_TOKEN;
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;

const baseEndpoint = "https://discord.com/api/v10";

export function getUser(id) {
  return fetcher(`${baseEndpoint}/users/${id}`, {
    headers: {
      Authorization: `Bot ${bot_token}`,
    },
  });
}

export function getGuildMember() {
  return fetcher(`${baseEndpoint}/guilds/${DISCORD_GUILD_ID}/members?limit=100`, {
    headers: {
      Authorization: `Bot ${bot_token}`,
    },
  });
}