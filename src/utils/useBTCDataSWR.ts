import useSWR, { SWRResponse } from 'swr'
import { BitflyerResType } from '../models/Crypto'
import { fetcher } from '../libs/fetcher';
/**
 * @description
 * useSWRの公式サンプルコード
 * https://github.com/vercel/swr/tree/main/examples/api-hooks
 */

export const useBTCDataSWR = (
  fallbackData: BitflyerResType
): SWRResponse<BitflyerResType, any> => {
  return useSWR(`api/BTC`, fetcher, { fallbackData })
}