import { ApiExternalDealCardLotItemDto } from '../../../swagger/models/api-external-deal-card-lot-item-dto';
import { ExternalDealCardLotItem } from '../../models/external-deal-card-lot-item.interface';

export function adaptExternalDealCardLotItemToUI(source?: ApiExternalDealCardLotItemDto | null): ExternalDealCardLotItem {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    quantity: source?.Quantity ?? 0,
  };
}
