import useSWR, { SWRResponse } from 'swr'
import { BitflyerResType } from '../models/Crypto'
import { fetcher } from '../libs/fetcher';

export const useCryptoDataSWR = (
  fallbackData: BitflyerResType,
  id: string
): SWRResponse<BitflyerResType, any> => {
  return useSWR(`api/Crypto/${id}`, fetcher, { fallbackData })
}
