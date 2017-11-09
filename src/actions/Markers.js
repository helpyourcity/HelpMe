// EXPORTS
import axios from "axios";
export const ADD_MARKER = 'ADD_MARKER';

// ACTIONS
export const addMarker = (marker) => {
  return(dispatch) => {
     axios.get("/api/user/helper")
    .then(users =>{
      console.log(users.data) 
      for( let i = 0; i< 4 ; i++){
    dispatch({
    type: ADD_MARKER,
    marker: {
      id: marker.id,
      lat: users.data[i].lat,
      lng: users.data[i].lng,
      text: users.data[i].name
    }
  })
} 
  })
   }
};