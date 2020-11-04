export interface AgeState {
    age: string
  }
  
  const initialState =  {age: ''}
  
  type Action = {type: "AGE", payload: AgeState}
  
  export const ageReducer = (state: AgeState = initialState , action: Action) :AgeState => {
    switch(action.type) {
      case "AGE": {
        return action.payload
      }
      default: 
        return state
    }
  }