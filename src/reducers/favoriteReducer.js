import { ADD_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesaActions";

const initialState = {
   favorites:[],
   displayFavorites:false
}

const reducer = (state = initialState, action) =>{
   switch(action.type) {
      case ADD_FAVORITE:
         console.log(state)
         return{
            ...state,
            favorites:[...state.favorites,
               {
                  id:state.favorites.length,
                  title: action.payload.title,
               }
            ]
         }
      case TOGGLE_FAVORITES:
         console.log(state)
         return{
            ...state,
            displayFavorites:!state.displayFavorites
         }
         default:
            return state;
   }
}

export default reducer;