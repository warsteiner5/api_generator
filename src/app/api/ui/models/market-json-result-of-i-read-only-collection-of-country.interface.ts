import { Country } from './country.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfCountry = MarketJsonVoidResultAlt & { 'data'?: Array<Country> | null; };
