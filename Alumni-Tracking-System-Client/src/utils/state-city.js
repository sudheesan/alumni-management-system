import {Country, State, City} from 'country-state-city';

const countryCode = 'US';
const country = Country.getCountryByCode(countryCode);
const states = State.getStatesOfCountry(country.isoCode);

const statesNames = states.map((state) => state.name);
const citiesByStates = {}
states.forEach((state) => {
    const cities_of_state = City.getCitiesOfState(country.isoCode, state.isoCode)
    citiesByStates[state.name] = cities_of_state.map((city => city.name));
})

export{
    statesNames,
    citiesByStates
}