import { ApiExternalDealItemDto } from '../../../swagger/models/api-external-deal-item-dto';
import { ExternalDealItem } from '../../models/external-deal-item.interface';
import { truTypeEnumAdapter } from '../enums/tru-type-enum.adapter';

export const externalDealItemAdapter = (source?: ApiExternalDealItemDto | null): ExternalDealItem => {
  return {
    id: source?.Id,
    lotItemId: source?.LotItemId,
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    okpd2Code: source?.Okpd2Code,
    okpd2Name: source?.Okpd2Name,
    price: source?.Price,
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
    sum: source?.Sum,
    truType: source?.TruType === null ? undefined : truTypeEnumAdapter(source?.TruType),
  };
}
