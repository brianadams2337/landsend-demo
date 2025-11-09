import type { LocaleObject } from '@nuxtjs/i18n'

type LocaleCode = LocaleObject['code']

interface ShopAndLocaleConfig {
  /** A BCP-47 format locale code (e.g. 'de-DE') */
  locale: string
  /** A unique identifying code for the shop/locale. Also used to create the shop's default path prefix. (e.g. 'de') */
  code: LocaleCode | LocaleCode[]
  /** The shopId */
  shopId: number
  /** The ISO 4217 currency code for the shop (e.g. 'EUR') */
  currency: string
  /** Flag the current shop as the default.
   * With `path` selection the default shop will be redirected to when loading the base route.
   * With `path_or_default` selection the default shop will use the base route itself */
  isDefault: boolean
  /** The file with the translations to load for the shop/locale (relative to /langs) */
  translationFile: string
  /** The country code for the shop region */
  countryCode: string
}

/**
 * List of configurations to be used to define the `shops` list for `storefront-nuxt` and `locales` for `nuxt-i18n`
 */
export const shops: [ShopAndLocaleConfig, ...ShopAndLocaleConfig[]] = [
  {
    locale: 'en-US',
    code: 'en-us',
    shopId: 1035,
    currency: 'USD',
    isDefault: true,
    translationFile: 'en_US.json',
    countryCode: 'US',
  },
  {
    locale: 'de-DE',
    code: 'de-de',
    shopId: 1036,
    currency: 'EUR',
    isDefault: false,
    translationFile: 'de_DE.json',
    countryCode: 'DE',
  },  
  {
    locale: 'fr-FR',
    code: 'fr-fr',
    shopId: 1037,
    currency: 'EUR',
    isDefault: false,
    translationFile: 'fr_FR.json',
    countryCode: 'FR',
  },
  {
    locale: 'de-AT',
    code: 'de-at',
    shopId: 1038,
    currency: 'EUR',
    isDefault: false,
    translationFile: 'de_DE.json',
    countryCode: 'AT',
  },
  {
    locale: 'en-UK',
    code: 'en-uk',
    shopId: 1039,
    currency: 'GBP',
    isDefault: false,
    translationFile: 'en_GB.json',
    countryCode: 'UK',
  }
]
