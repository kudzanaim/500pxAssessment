import axios from 'axios';
import _ from 'lodash';
import $ from 'jquery';


// Action Types
export const GETPHOTOS = "GETPHOTOS";
export const SINGLEPHOTO = "SINGLEPHOTO";

// Get Home Data Functions:
export function getphotos(filter, page) {
    return async function(dispatch){
        const results = await axios.get(`https://five100-gcsusetqgq-uc.a.run.app/popular/${filter}/${page}`).then(response => response).catch(error => error);
        
        document.querySelector('html').scrollTop = 0;

        document.querySelector('.home').scrollTop = 0;
    
        return dispatch({
            type: GETPHOTOS,
            payload: {data: results.data, page, filter}
        })

        
    }
};

export function getSinglePhoto(id) {
    return async function(dispatch){
        const photo = await axios.get(`https://five100-gcsusetqgq-uc.a.run.app/photo/${id}`).then(response => response).catch(error => error);
        
        return dispatch({
            type: SINGLEPHOTO,
            payload: photo.data
        })
        
    }
};

