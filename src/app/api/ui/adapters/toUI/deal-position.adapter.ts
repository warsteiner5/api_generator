import { ApiDealPositionDto } from '../../../swagger/models/api-deal-position-dto';
import { DealPosition } from '../../models/deal-position.interface';

export function adaptDealPositionToUI(source?: ApiDealPositionDto | null): DealPosition {
  return {
    id: source?.Id ?? 0,
    lotItemId: source?.LotItemId ?? 0,
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Name: source?.Okpd2Name ?? '',
    positionNumber: source?.PositionNumber ?? 0,
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
    sum: source?.Sum ?? 0,
  };
}
