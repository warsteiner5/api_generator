import { ApiKtruDto } from '../../../swagger/models/api-ktru-dto';
import { Ktru } from '../../models/ktru.interface';
import { ktruCharacteristicDto2Adapter } from './ktru-characteristic-dto-2.adapter';

export const ktruAdapter = (source?: ApiKtruDto | null): Ktru => {
  return {
    applicationDateEnd: source?.ApplicationDateEnd,
    applicationDateStart: source?.ApplicationDateStart,
    characteristics: source?.Characteristics?.map((item) => ktruCharacteristicDto2Adapter(item)),
    code: source?.Code,
    description: source?.Description,
    inclusionDate: source?.InclusionDate,
    name: source?.Name,
    okeiNames: source?.OkeiNames,
    okpd2Code: source?.Okpd2Code,
    publishDate: source?.PublishDate,
    version: source?.Version,
  };
}
