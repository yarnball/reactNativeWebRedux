export const titleUpdate = (
  state = { apiData: [], loaded: false, text: [{ title: "foo", id:2}, { title: "bar", id:4 }].sort((a, b) => a.id - b.id) },
  action
) => {
  switch (action.type) {
    case "TEXTCHANGE":
      const rmvItm = state.text.filter(itm => itm.id !== action.payload.oldItm[0].id).pop()
      const newObj = { ...action.payload.oldItm[0], title:action.payload.newTitle }
      return { ...state, text: [rmvItm, newObj].sort((a, b) => a.id - b.id) };
    case "LOAD_SUCCESS":
      console.log('data success!', action)
      return { ...state, apiData: action.data.Results, loaded: true };
    case "LOAD_BAD":
      console.log('data BAD!!', action)
      return state;
    default:
      return state;
  }
};