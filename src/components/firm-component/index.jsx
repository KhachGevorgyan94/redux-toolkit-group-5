import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserById, setFirmInfo} from "../../store/reducers/firm-slice";

export const FirmComponent = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        firmName: '',
        address: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleCLick = () => {
        console.log(formData)
        dispatch(setFirmInfo(formData))
    }


    return <div>
        <label>
            <input onChange={handleChange} value={formData.firmName} type="text" name={'firmName'}/>
        </label>
        <label>
            <input onChange={handleChange} value={formData.address} type="text" name={'address'}/>
        </label>
        <button onClick={handleCLick}>Add new Firm</button>
        <FirmInfo/>

    </div>
}


const FirmInfo = () => {
    const dispatch = useDispatch()
    const firmInfoData = useSelector(state => state.firm)
    useEffect(() => {
        dispatch(fetchUserById())
    }, []);


    return <div>


        {/*<p>Firm Name {firmInfoData.firmName}</p>*/}
        {/*<p>Firm Address {firmInfoData.address}</p>*/}
        {firmInfoData && firmInfoData.isLoading ? <p>Loading ....</p> : null}

        {firmInfoData.usersList.length? <div>
            {firmInfoData.usersList.map((item,index)=>{
                return  <p>{item.name}</p>
            })}
        </div>: null}

    </div>
}

