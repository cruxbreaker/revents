const axios = require('axios');
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiYW5raXRkdXR0YTMxOCIsImEiOiJja2UybjdqNXMwYjFkMnpvNDQ3cGh3eWdmIn0.uwVKZ4eQw7KoZUP447ndGQ';

export const placesAutocomplete = async ({
  searchText,
  autocomplete = true,
  bbox = '',
  country = '',
  fuzzyMatch = true,
  language = 'en',
  limit = 10,
  proximity = '',
  routing = false,
  types = '',
}) => {
  const BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
  const FETCH_URL = `${BASE_URL}/${encodeURI(
    searchText
  )}.json?access_token=${MAPBOX_ACCESS_TOKEN}&autocomplete=${autocomplete}&bbox=${bbox}&country=${country}&fuzzyMatch=${fuzzyMatch}&language=${language}&limit=${limit}&proximity=${proximity}&routing=${routing}&types=${types}`;
  try {
    const { data } = await axios.get(FETCH_URL);
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};
