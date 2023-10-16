import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const YellowBtn = () => {
    return (
        <div className="">
            <div className="yellow-btn hover:animate-rotate"><FontAwesomeIcon icon={faPlus} /></div>
        </div>
    )
}

export default YellowBtn