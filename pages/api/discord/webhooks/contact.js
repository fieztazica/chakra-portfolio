// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { DISCORD_WEBHOOK_URL, webhookPost } from "../../../../lib/discord";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.redirect(307, "/");
  const result = await fetch(`${DISCORD_WEBHOOK_URL}`, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  res.status(result.status).send({ result });
}
