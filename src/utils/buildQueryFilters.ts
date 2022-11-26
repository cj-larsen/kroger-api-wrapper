import { QueryFilters } from "../types/queryFilters";

function buildQueryFilters(filters: QueryFilters = {}): string {
  let queryFilters: string = "";

  Object.keys(filters).forEach((key, i) => {
    const prefix: string = i === 0 ? "?" : "&";
    const value: string | number = filters[key as keyof QueryFilters]!;
    queryFilters += `${prefix}filter.${key}=${encodeURIComponent(value)}`;
  });

  return queryFilters;
}

export default buildQueryFilters;
