import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidated: boolean,
  message?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ revalidated: false, message: 'Not implemented' })
}
