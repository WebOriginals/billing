export const Lang = Object.freeze({
  RU: 'ru',
  EN: 'en',
} as const);

export type LangType = typeof Lang[keyof typeof Lang];