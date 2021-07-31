export const addToCart=(obj)=>{
    return{
        type: 'Increment',
        payload: obj
    }
}
export const deleteToCart=()=>{
    return{
        type: 'Decrement'
    }
}