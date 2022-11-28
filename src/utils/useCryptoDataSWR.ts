import useSWR, { SWRResponse } from 'swr'
import { BitflyerResType } from '../models/Crypto'
import { fetcher } from '../libs/fetcher';

/**
 * @description
 * useSWRの公式サンプルコード
 * https://github.com/vercel/swr/tree/main/examples/api-hooks
 */

export const useCryptoDataSWR = (
  fallbackData: BitflyerResType,
  cryptoID: string
): SWRResponse<BitflyerResType, any> => {
  return useSWR(`api/Crypto/${cryptoID}`, fetcher, { fallbackData })
}
