// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { team } from "../../../data/team";
import { getGuildMember } from "../../../lib/discord";

export default async function handler(req, res) {
  const data = await getGuildMember();
  // console.log(data);
  const members = data
    .filter((member) => {
      const discordIds = team.map((m) => m.discordId);
      return !member.user.bot && discordIds.includes(member.user.id);
    })
    .map((member) => {
      return {
        ...member,
        more: team.find((tm) => tm.discordId === member.user.id),
      };
    });
  res.status(200).json(members);
}
