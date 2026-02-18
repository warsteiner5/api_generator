import { ExternalDealItem } from '../../models/external-deal-item.interface';
import { ApiExternalDealItemDto } from '../../../swagger/models/api-external-deal-item-dto';
import { adaptApiTruTypeEnum } from './api-tru-type-enum.adapter';

export function adaptApiExternalDealItemDto(source?: ExternalDealItem | null): ApiExternalDealItemDto {
  return {
    Id: source?.id,
    LotItemId: source?.lotItemId,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
    TruType: adaptApiTruTypeEnum(source?.truType),
  };
}
