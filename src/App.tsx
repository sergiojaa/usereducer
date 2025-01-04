import { ChangeEvent, useState,useReducer } from "react"
//usereducer gamoikeneba ert logikashi gaertianebul
//ramdenime statis shesacvlelad da gasaertianeblad
//count statis shecvlislogika ikneba ak, da gamovidzaebt dispatchit
 // //actionit veubnebit rogor sheicvalos statis mnishvneloba daakldes tu gaizardos
function reducer(state,action){
  if(action.type === 'inc'){
    return state + 1
  }
  if(action.type === 'dec'){
    return state - 1
  }
}
function App() {
  //dispatch aris funqcia, countki state aris ra,magit vakontrolebt logikas
  // am shemtxevavshi count aris 0,reducer funqciashi mekneba states shecvlis
  //logika,am funqcias ki gamovidzaxebt dispatchit
  const initialState = 0
  const [count,dispatch] = useReducer(reducer,initialState)
//  const [count , setCount] = useState(0)
 const  [step , setStep] = useState(1)
const date = new Date("2021-09-01")
date.setDate(date.getDate()+ count)
function defineCount(event: ChangeEvent<HTMLInputElement>){
  // setCount(Number(event.target.value))
}
function defineStep(event: ChangeEvent<HTMLInputElement>){
  setStep(Number(event.target.value))
}
function inc(){
  // setCount((prev)=> prev + step)
  dispatch({type: 'inc'})
}
function dec(){
  dispatch({type:'dec'})
  // setCount((prev)=> prev-step)
}
function reset(){
  // setCount(0)
  setStep(0)
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

   </div>
  )
}

export default App
