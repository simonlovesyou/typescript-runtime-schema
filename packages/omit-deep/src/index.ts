import {
  curry,
  pipe,
  mapObjIndexed,
  omit,
  map,
  ifElse,
  is,
  identity,
} from "ramda";

/**
 * Returns a partial copy of an object omitting the keys specified deeply in the object.
 * @public
 * @param keys The keys we want removed from the object
 * @param object The object we want the keys removed from
 * @returns Object with keys removed
 */
const omitDeep = curry(
  (keys: string[], object: Record<any, any>): Record<any, any> =>
    pipe(
      () => object,
      omit(keys),
      mapObjIndexed(
        ifElse(
          Array.isArray,
          map(ifElse(is(Object), omitDeep(keys), identity)),
          ifElse(is(Object), omitDeep(keys), identity)
        )
      )
    )()
);

export default omitDeep;
