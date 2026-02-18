import { ApiKtruDto } from '../../../swagger/models/api-ktru-dto';
import { Ktru } from '../../models/ktru.interface';
import { adaptKtruCharacteristicDto2ToUI } from './ktru-characteristic-dto-2.adapter';

export function adaptKtruToUI(source?: ApiKtruDto | null): Ktru {
  return {
    applicationDateEnd: source?.ApplicationDateEnd ?? '',
    applicationDateStart: source?.ApplicationDateStart ?? '',
    characteristics: (source?.Characteristics ?? []).map((item) => adaptKtruCharacteristicDto2ToUI(item)),
    code: source?.Code ?? '',
    description: source?.Description ?? '',
    inclusionDate: source?.InclusionDate ?? '',
    name: source?.Name ?? '',
    okeiNames: source?.OkeiNames ?? [],
    okpd2Code: source?.Okpd2Code ?? '',
    publishDate: source?.PublishDate ?? '',
    version: source?.Version ?? 0,
  };
}
