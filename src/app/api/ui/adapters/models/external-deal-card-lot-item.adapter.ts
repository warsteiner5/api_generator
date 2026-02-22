import { ApiExternalDealCardLotItemDto } from '../../../swagger/models/api-external-deal-card-lot-item-dto';
import { ExternalDealCardLotItem } from '../../models/external-deal-card-lot-item.interface';

export const externalDealCardLotItemAdapter = (source?: ApiExternalDealCardLotItemDto | null): ExternalDealCardLotItem => {
  return {
    id: source?.Id,
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    okpd2Code: source?.Okpd2Code,
    quantity: source?.Quantity,
  };
}
