import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    firmName: '',
    address: '',
    isLoading:false,
    usersList:[]
}
export const fetchUserById = createAsyncThunk(
    'firm/fetchUserList',
    // Declare the type your function argument here:
    async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        // Inferred return type: Promise<MyData>
        return (await response.json())
    },
)


const FirmSlice = createSlice({
    name: 'firm',
    // initialState:initialState,
    initialState,
    reducers: {
        setFirmInfo: function (state, action) {
            state.firmName = action.payload.firmName
            state.address = action.payload.address
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchUserById.fulfilled, (state, {payload}) => {
            console.log('fulfilled')
            state.isLoading = false
            state.usersList = payload


        })
        builder.addCase(fetchUserById.rejected, (state, {payload}) => {
            console.log('rejected')
        })
        builder.addCase(fetchUserById.pending, (state, {payload}) => {
            state.isLoading = true
            console.log('pending')
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time

    },
})

export const {setFirmInfo} = FirmSlice.actions
export default FirmSlice.reducer

//
// let firstName = 'sadasfd'
// let x = {
//     firstName:firstName
// }



