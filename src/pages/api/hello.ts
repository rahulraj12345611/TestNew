// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  error: String
}

export default function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
  res: NextApiResponse<any>
) {
  try {
    res.status(200).json({ name: 'brain ware' })
  } catch(e) {
    res.status(500).json({ error: 'failed to load data' })
  }
}