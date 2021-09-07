export const ADD_FAVORITE = 'ADD_FAVORITE'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'
export const addFavorite = (movie)=>{
    return({type: ADD_FAVORITE, payload:movie})
}
export const toggleFavorites = (movie)=>{
    return({type: TOGGLE_FAVORITES})
}