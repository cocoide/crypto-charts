import { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from '../../../libs/fetcher';


const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { id } = req.query
    const API_URL = `https://api.bitflyer.com/v1/ticker?product_code=${id}_JPY`
    const data =await fetcher(API_URL)
    res.end(JSON.stringify(data))
}
export default handler