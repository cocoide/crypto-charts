import Head from 'next/head'
import { BitflyerResType, CryptoType } from '../models/Crypto'
import { fetcher } from '../libs/fetcher';
import CryptoDetail from '../components/Templates/CryptoDetail';
import { GetStaticProps } from 'next';
import { useCryptoDataSWR } from '../utils/useCryptoDataSWR';
import { useState } from 'react';
import CryptoTag from '../components/Templates/CryptoTag';
import Image from 'next/image';



type Props = { fallbackData: BitflyerResType }

const Home: React.FC<Props> = ({ fallbackData }) => {

  const [cryptoID, setCryptoID] = useState<CryptoType>("BTC");

  const { data, mutate } = useCryptoDataSWR(fallbackData, cryptoID)

  const handleUpdateCrypto = async (): Promise<void> => {
    const newData = await fetcher(`/api/Crypto/${cryptoID}`)
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
        <div className='flex justify-center'>
          <Image src="/crypto1.jpg" alt='' height={200} width={400} className="rounded-xl opacity-80" />
        </div>
        <CryptoDetail
          product_code={data?.product_code}
          timestamp={data?.timestamp}
          best_bid={data?.best_bid}
          best_ask={data?.best_ask}
          handleClick={handleUpdateCrypto}
        />


        <div className='flex flex-row justify-center'>
          <CryptoTag
            CryptoID='BTC'
            handleClick={() => setCryptoID("BTC")} />

          <CryptoTag
            CryptoID='ETH'
            handleClick={() => setCryptoID("ETH")} />

          <CryptoTag
            CryptoID='XLM'
            handleClick={() => setCryptoID("XLM")} />

          <CryptoTag
            CryptoID='XRP'
            handleClick={() => setCryptoID("XRP")} />
        </div>



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