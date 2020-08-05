import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-shoreditch',
    predictionPlace: {
      address: 'Shoreditch, East London',
      bounds: new LatLngBounds(new LatLng(51.53233597, -0.06825022), new LatLng(51.51890999, -0.08815171)),
    },
  },
  {
    id: 'default-camden',
    predictionPlace: {
      address: 'Camden, Northwest London',
      bounds: new LatLngBounds(new LatLng(60.53045, 22.38197), new LatLng(60.33361, 22.06644)),
    },
  },
  {
    id: 'default-brixton',
    predictionPlace: {
      address: 'Brixton, South London',
      bounds: new LatLngBounds(new LatLng(61.83657, 24.11838), new LatLng(61.42728, 23.5422)),
    },
  },
  {
    id: 'default-clapham',
    predictionPlace: {
      address: 'Clapham, South London',
      bounds: new LatLngBounds(new LatLng(65.56434, 26.77069), new LatLng(64.8443, 24.11494)),
    },
  },
  {
    id: 'default-peckham',
    predictionPlace: {
      address: 'Hackney Wick, East London',
      bounds: new LatLngBounds(new LatLng(66.16997, 29.16773), new LatLng(66.16095, 29.13572)),
    },
  },
];
