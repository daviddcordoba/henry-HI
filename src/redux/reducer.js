import { ADD_FAV,REMOVE_FAV,FILTER,ORDER }  from "./actions-types"

const initialState = {
    myFavorites:[],
    allFavs: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV :
            return {
                ...state,
                myFavorites: [...state.allFavs,payload],
                allFavs : [...state.allFavs,payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites : state.myFavorites.filter( fav => fav.id !== payload)
            }
        case FILTER:
            const allFavsFiltered = state.allFavs.filter(character => character.gender === payload)
            return{
                ...state,
                myFavorites: allFavsFiltered
            }
        case ORDER:
            const allFavsCopy = [...state.allFavs]
            return{
                ...state,
                myFavorites: 
                    payload === 'A' 
                        ? allFavsCopy.sort((a,b) => a.id - b.id) 
                        : allFavsCopy.sort((a,b) => b.id - a.id)
            }
        default:
            return{...state}
    }
}

export default reducer