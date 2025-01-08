import { ChangeEvent, useReducer } from "react"
import Child from "./Child";
//usereducer gamoikeneba ert logikashi gaertianebul
//ramdenime statis shesacvlelad da gasaertianeblad
//count statis shecvlislogika ikneba ak, da gamovidzaebt dispatchit
 // //actionit veubnebit rogor sheicvalos statis mnishvneloba daakldes tu gaizardos
import { initialState, reducer } from "./reducer";
function App() {
  //dispatch aris funqcia, countki state aris ra,magit vakontrolebt logikas
  // am shemtxevavshi count aris 0,reducer funqciashi mekneba states shecvlis
  //logika,am funqcias ki gamovidzaxebt dispatchit
 
  
  const [state,dispatch] = useReducer(reducer,initialState)
  const  {count,step} = state;
const date = new Date("2021-09-01")
date.setDate(date.getDate()+ count)
function defineCount(event: ChangeEvent<HTMLInputElement>){
  dispatch({type:"setCount", payload:Number(event.target.value)})
}
function defineStep(event: ChangeEvent<HTMLInputElement>){
  dispatch({type:'setStep',payload: Number(event.target.value)})
}
function inc(){
  dispatch({type: 'inc'})
}
function dec(){
  dispatch({type:'dec'})
}
function reset(){
  dispatch({type:"reset"})
}

  return (
   <div>
    <div>
      <input type="range" onChange={defineStep} min={1} max={10} />
      <div>
        <button onClick={dec}>-</button>
        <input type="number" value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      {date.toString()}
    </div>
    <div>
    {" "}
    <button onClick={reset}>Reset</button>
    </div>
    <Child dispatch ={dispatch} />

   </div>
  )
}

export default App
