interface LocationsFilters {
  "zipCode.near"?: string;
  "latLong.near"?: string;
  "lat.near"?: string;
  "lon.near"?: string;
  radiusInMiles?: number;
  limit?: number;
  chain?: string;
  department?: string;
}

export default LocationsFilters;
