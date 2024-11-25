//usereducer gamoikeneba ert logikashi gaertianebul
//ramdenime statis shesacvlelad da gasaertianeblad
import { reducer, initialState } from "./reducer"
import { ChangeEvent,  useReducer } from "react"
import Child from "./Child"
  //count statis shecvlislogika ikneba ak, da gamovidzaebt dispatchit
  //actionit veubnebit rogor sheicvalos statis mnishvneloba daakldes tu gaizardos


function App() {
 
  const [state, dispatch] =  useReducer(reducer, initialState)  

  const {count,step} = state
  
  //am cvladshi purbelielementi aris state,anu is mnishveloba romlitac chveni
  // logika kontroldeba mag count, dispatch ukve funqciaa ritac shevidzlia
  //gamovidzaxod reducer funqcia

  //  usereducershi pirveli argumenti funqciaa,meore sawkisi mnishvnelobaa
  // const [count, setCount] = useState(0)

  const date = new Date("2021-09-21")
  date.setDate(date.getDate() + count)

  function defineCount(event: ChangeEvent<HTMLInputElement>){
    dispatch( {type: "setCount", payload: Number(event.target.value) } )
  }
  
  function defineStep(event: ChangeEvent<HTMLInputElement>){
      dispatch({type:"setStop", payload: Number(event.target.value)})
  }

  function inc(){
    dispatch({type : "inc",}  )//payload 1 anu gaizardos 1it
  }
  function dec(){
    dispatch({type : "dec",  }  )

  }

function reset(){
  dispatch({type:'reset'})
  // setStep(1)
}
  return (
   <div>
    <div>
      <input type="range" onChange={defineStep} min={1} max={10} />{step}
    </div>
    <div>
      <button onClick={dec}></button>
      <input type="number" value={count} onChange={defineCount} />
      <button onClick={inc}>+</button>
    </div>
    {date.toString()}
    <div>
      {" "}
      <button onClick={reset}>reset</button>
    </div>
    <Child dispatch = {dispatch}  />
   </div>
  )
}

export default App
