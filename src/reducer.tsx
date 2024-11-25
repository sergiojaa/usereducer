export const initialState = {  //obiekti imitiro bevri ram sheileba gadavcet
    count: 0,
    step:1
  }  
 export function reducer(state: any,action: any){   
 switch(action.type){
  case "inc":
    return {...state, count: state.count + state.step}
    case "dec": 
    return {...state, count: state.count - state.step}
    case "setCount":
      return {...state, count: action.payload}
      case "setStep":
      return {...state, step: action.payload}
      case 'reset':
        return initialState
        default:
         throw new Error("invalid action type")



 }
}