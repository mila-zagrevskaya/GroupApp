export const GET_DOCTORS_REQUEST = "GET_DOCTORS_REQUEST";
export const GET_DOCTORS_REQUEST_SUCCESS = "GET_DOCTORS_REQUEST_SUCCESS";
export const GET_DOCTORS_REQUEST_FAIL = "GET_DOCTORS_REQUEST_FAIL";

export const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST";
export const GET_SERVICES_REQUEST_SUCCESS = "GET_SERVICES_REQUEST_SUCCESS";
export const GET_SERVICES_REQUEST_FAIL = "GET_SERVICES_REQUEST_FAIL";

const URL = "https://team-app-28f4a.firebaseio.com/";

// -----------------------------------------------------------------------------------------------------------------

const getDoctorsRequest = payload => ({
    type: GET_DOCTORS_REQUEST,
    payload
});

const getDoctorsRequestSuccess = payload => ({
    type: GET_DOCTORS_REQUEST_SUCCESS,
    payload
});

const getDoctorsRequestFail = payload => ({
    type: GET_DOCTORS_REQUEST_FAIL,
    payload
});

export const getDoctors = () => dispatch => {
    dispatch(getDoctorsRequest());
    return fetch(`${URL}doctors.json`)
        .then(res => res.json())
        .then(res => dispatch(getDoctorsRequestSuccess(res)))
        .catch(err => dispatch(getDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
const getServicesRequest = payload => ({
    type: GET_SERVICES_REQUEST,
    payload
});

const getServicesRequestSuccess = payload => ({
    type: GET_SERVICES_REQUEST_SUCCESS,
    payload
});

const getServicesRequestFail = payload => ({
    type: GET_SERVICES_REQUEST_FAIL,
    payload
});

export const getServices = () => dispatch => {
    dispatch(getServicesRequest());
    return fetch(`${URL}services.json`)
        .then(res => res.json())
        .then(res => dispatch(getServicesRequestSuccess(res)))
        .catch(err => dispatch(getServicesRequestFail(err)));
};