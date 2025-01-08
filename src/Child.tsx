
export default function Child({dispatch}: {dispatch:any}) {
    function inc(){
        dispatch({type: "inc",payload:3})
    }
  return (
    <div>
        <button onClick={inc}>+</button>
      
    </div>
  )
}
