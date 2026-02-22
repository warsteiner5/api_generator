import { DictionaryValueAlt } from './dictionary-value-alt.interface';
import { Okpd2Code } from './okpd-2-code.interface';

// @ts-ignore
export interface KsrValueAlt extends DictionaryValueAlt {
  id: number;
  unit: string;
  okpd2Code: string;
}
