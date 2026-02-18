import { Ktru } from '../../models/ktru.interface';
import { ApiKtruDto } from '../../../swagger/models/api-ktru-dto';
import { adaptApiKtruCharacteristicDto2 } from './api-ktru-characteristic-dto-2.adapter';

export function adaptApiKtruDto(source?: Ktru | null): ApiKtruDto {
  return {
    ApplicationDateEnd: source?.applicationDateEnd,
    ApplicationDateStart: source?.applicationDateStart,
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiKtruCharacteristicDto2(item)),
    Code: source?.code,
    Description: source?.description,
    InclusionDate: source?.inclusionDate,
    Name: source?.name,
    OkeiNames: source?.okeiNames ?? [],
    Okpd2Code: source?.okpd2Code,
    PublishDate: source?.publishDate,
    Version: source?.version,
  };
}
