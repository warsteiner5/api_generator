import { ApiExternalDealItemDto } from '../../../swagger/models/api-external-deal-item-dto';
import { ExternalDealItem } from '../../models/external-deal-item.interface';
import { adaptTruTypeEnumToUI } from './tru-type-enum.adapter';

export function adaptExternalDealItemToUI(source?: ApiExternalDealItemDto | null): ExternalDealItem {
  return {
    id: source?.Id ?? 0,
    lotItemId: source?.LotItemId ?? 0,
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Name: source?.Okpd2Name ?? '',
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
    sum: source?.Sum ?? 0,
    truType: adaptTruTypeEnumToUI(source?.TruType),
  };
}
