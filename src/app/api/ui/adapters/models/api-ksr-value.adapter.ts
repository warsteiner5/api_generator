import { KsrValueAlt } from '../../models/ksr-value-alt.interface';
import { ApiKsrValueAltDto } from '../../../swagger/models/api-ksr-value';
import { apiDictionaryValueAltDtoAdapter } from './api-dictionary-value.adapter';

export const apiKsrValueAltDtoAdapter = (source?: KsrValueAlt | null): ApiKsrValueAltDto => {
  return {
    ...apiDictionaryValueAltDtoAdapter(source as unknown as Parameters<typeof apiDictionaryValueAltDtoAdapter>[0]),
    Id: source?.id,
    Unit: source?.unit,
    Okpd2Code: source?.okpd2Code,
  };
}
