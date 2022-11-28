import { BitflyerResType } from '../models/Crypto'



 export const fetcher = async (args: string): Promise<BitflyerResType> => {
    const response = await fetch(args)
    return (await response.json()) as BitflyerResType
  }