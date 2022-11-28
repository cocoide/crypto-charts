import Head from 'next/head'
import { BitflyerResType } from '../models/Crypto'
import { useBTCDataSWR } from '../utils/useBTCDataSWR';
import { fetcher } from '../libs/fetcher';
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import CryptoDetail from '../components/Templates/CryptoDetail';
import { GetStaticProps } from 'next';

type Props = {
  fallbackData: BitflyerResType
}

const Home: React.FC<Props> = ({ fallbackData }) => {
  const { data, mutate } = useBTCDataSWR(fallbackData)

  const handleUpdateBTC = async (): Promise<void> => {
    const newData = await fetcher('/api/bitcoin')
    mutate(newData).catch((error) => {
      throw error
    })
  }

  return (
    <>
    <div>
      <Head>
          <title>Crypto Charts</title>
      </Head>
    </div>


      <main>

        <CryptoDetail
          product_code={data?.product_code}
          timestamp={data?.timestamp}
          best_bid={data?.best_bid}
          best_ask={data?.best_ask}
          handleUpdate={handleUpdateBTC}
        />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const API_URL_ROOT = 'https://api.bitflyer.com/v1/ticker'

  const data = await fetcher(API_URL_ROOT)
  return {
    props: {
      fallbackData: data
    }
  }
}