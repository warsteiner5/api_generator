import { DictionaryValueAlt } from './dictionary-value-alt.interface';
import { Okpd2Code } from './okpd-2-code.interface';

export type KsrValueAlt = DictionaryValueAlt & { 'Id'?: number; 'Unit'?: string | null; 'Okpd2Code'?: string | null; };
