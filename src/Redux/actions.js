export const increaseAction = { type: 'INCREMENT' }
export const decreaseAction = { type: 'DECREMENT' }
export const textChangeAction = payload => ({ type: "TEXTCHANGE", payload });

export function loadData(payload) { 
  return dispatch => fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/saab?format=json`) // Redux Thunk handles these
     // .then(res => res.json())
     // .then(
     //   data => dispatch({ type: 'LOAD_GOOD', data }),
     //   err => dispatch({ type: 'LOAD_BAD', err })
     // )
	.then(res => res.json())
	.then((data) => {
        dispatch({ type: 'LOAD_GOOD', data: data, id: payload.id, })
      })
}