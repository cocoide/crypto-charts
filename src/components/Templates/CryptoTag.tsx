type Props = {
    CryptoID: string,
    handleClick: () => void
}


const CryptoTag = (props: Props) => {


    return (
        <button
            onClick={props.handleClick}
            type="button"
            className="place-items-center h-auto w-20 m-3 p-3 
                    bg-indigo-300 text-white rounded-md drop-shadow">
            {props.CryptoID}
        </button>
    )
}
export default CryptoTag