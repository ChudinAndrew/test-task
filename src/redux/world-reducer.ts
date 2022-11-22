

const initialState = {
newConfirmed: 330641,
totalConfirmed: 636673999,
newDeaths: 1037,
totalDeaths: 6616170
}

const worldReducer = (state =initialState, action:any) =>{
    switch (action.type){
        
        default:return {...state}
    }
    
}
export default worldReducer;