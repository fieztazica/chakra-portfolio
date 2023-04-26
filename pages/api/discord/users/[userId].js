// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getUser } from '../../../../lib/discord'

export default async function handler(req, res) {
    const { userId } = req.query
    res.status(200).json(await getUser(userId))
}
