import Head from 'next/head'
import { BitflyerResType } from '../models/Crypto'
import { fetcher } from '../libs/fetcher';
import CryptoDetail from '../components/Templates/CryptoDetail';
import { GetStaticProps } from 'next';
import { useBTCDataSWR } from '../utils/useBTCDataSWR';
import { useCryptoDataSWR } from '../utils/useCryptoDataSWR';

type Props = {
  fallbackData: BitflyerResType
}

const Home: React.FC<Props> = ({ fallbackData }) => {

  const id = "ETH"

  const { data, mutate } = useCryptoDataSWR(fallbackData, id)

  const handleUpdateCrypto = async (): Promise<void> => {
    const newData = await fetcher(`/api/Crypto/${id}`)
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
          handleClick={handleUpdateCrypto}
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