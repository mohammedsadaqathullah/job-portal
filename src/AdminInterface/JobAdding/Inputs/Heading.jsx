import { useContext } from "react"
import DataContext from '../../DataContext';


const Heading = () => {
    const { setJobAddingBox } = useContext(DataContext);
    return (
        <>
            <span className='lineZero'>
                <h1 className='JobAddingHeading'>Create Job Opening</h1>
                <span className='closeSymbol' onClick={() => setJobAddingBox('NotShowBox')}>X</span>
            </span>
        </>
    )
}

export default Heading;