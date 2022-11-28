import { ArrowPathIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { BitflyerResType } from '../../models/Crypto';
import UpdateIcon from '../Atoms/UpdateIcon';


type Func = { handleUpdate: () => void };
type Props = Func & BitflyerResType;

const CryptoDetail = (props: Props) => {
  return (
    <div className="bg-indigo-100 rounded-md m-5 p-3">


      <div className='flex flex-row  justify-between place-items-center'>

        <div className='flex flex-col'>
          <p>銘柄：{props.product_code}</p>
          <p>日時：{props.timestamp}</p>
          <p>最低売り価格：{props.best_bid}</p>
          <p>最高売り価格：{props.best_ask}</p>
        </div>

        <button type="button" onClick={props.handleUpdate} className="
        group inline-flex bg-indigo-300 rounded-full drop-shadow m-2 p-3"
        ><UpdateIcon />
        </button>

      </div>
    </div>
  )
}
export default CryptoDetail