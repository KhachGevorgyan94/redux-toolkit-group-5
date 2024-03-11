import {useSelector} from "react-redux";
import {useEffect} from "react";

export const UserComponent = ()=>{
    const users = useSelector(function (state){
        return state.user.userList
    })

    console.log(users)

    // useEffect(() => {
    //     console.log(users, 'aaaaaaa')
    // }, [users]);


    return <div>
        {/*{users.map((item,index)=>{*/}
        {/*    return <p>{item.firstName} {index}</p>*/}
        {/*})}*/}
    </div>
}