import { ApiKsrValueAltDto } from '../../../swagger/models/api-ksr-value';
import { KsrValueAlt } from '../../models/ksr-value-alt.interface';
import { dictionaryValueAltAdapter } from './dictionary-value-alt.adapter';

export const ksrValueAltAdapter = (source?: ApiKsrValueAltDto | null): KsrValueAlt => {
  return {
    ...dictionaryValueAltAdapter(source as unknown as Parameters<typeof dictionaryValueAltAdapter>[0]),
    id: source?.Id,
    unit: source?.Unit,
    okpd2Code: source?.Okpd2Code,
  };
}
