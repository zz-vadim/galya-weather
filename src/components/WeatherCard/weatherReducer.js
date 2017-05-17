import { GET_TODAY_WEATHER, GET_TODAY_WEATHER_SUCCESS, GET_TOMORROW_WEATHER, GET_TOMORROW_WEATHER_SUCCESS } from '../../constants/WeatherCard';

const initialState = {
    fetching: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODAY_WEATHER_SUCCESS:
            return { ...state, todayWeather: action.payload, fetching: false };

        case GET_TODAY_WEATHER:
            return { ...state, todayWeather: action.payload, fetching: true };

        case GET_TOMORROW_WEATHER_SUCCESS:
            return { ...state, tomorrowWeather: action.payload, fetching: false };

        case GET_TOMORROW_WEATHER:
            return { ...state, tomorrowWeather: action.payload, fetching: true };

        default:
            return state;
    }
};