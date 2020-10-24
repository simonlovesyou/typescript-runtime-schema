export type AlphaNum<T> = T;

export interface Base64Options {
  paddingRequired?: boolean;
  urlSafe?: boolean;
}

export type Base64<T, Base64Options> = T;

export type Length<T, Length extends number> = T

export type Lowercase<T> = T

export type Max<T, MaxLength extends number> = T

export type Min<T, MinLength extends number> = T

export type Pattern<T, Regexp extends RegExp> = T

export type Regex<T, Regexp extends RegExp> = Pattern<T, Regexp>

/*
  case()
  creditCard()
  dataUri()
  domain()
  email()
  guid()
  - aliases:
  uuid
  hex()
  hostname()
  insensitive()
  ip()
  isoDate()
  isoDuration()
  lowercase()
  normalize()
  replace()
  token()
  trim()
  truncate()
  uppercase()
  uri()
*/