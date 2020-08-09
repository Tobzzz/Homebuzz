import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-brixton',
    predictionPlace: {
      address: 'Brixton, South London',
      bounds: new LatLngBounds(new LatLng(51.47030911, -0.09591138), new LatLng(51.44287872, -0.13651028)),
    },
  },
  {
    id: 'default-camden',
    predictionPlace: {
      address: 'Camden, Northwest London',
      bounds: new LatLngBounds(new LatLng(51.55273343, -0.1219784), new LatLng(51.53102291, -0.15417167)),
    },
  },
  {
    id: 'default-shoreditch',
    predictionPlace: {
      address: 'Shoreditch, East London',
      bounds: new LatLngBounds(new LatLng(51.53233597, -0.06825022), new LatLng(51.51890999, -0.08815171)),
    },
  },
  {
    id: 'default-hackney',
    predictionPlace: {
      address: 'Hackney Wick, East London',
      bounds: new LatLngBounds(new LatLng(51.55758072, -0.00695198), new LatLng(51.53020282, -0.04755087)),
    },
  },
  {
    id: 'default-nottinghill',
    predictionPlace: {
      address: 'Notting Hill, West London',
      bounds: new LatLngBounds(new LatLng(51.52289649, -0.18761462), new LatLng(51.49780958, -0.2247888)),
    },
  },
];
