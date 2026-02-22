import { ApiDealPositionDto } from '../../../swagger/models/api-deal-position-dto';
import { DealPosition } from '../../models/deal-position.interface';

export const dealPositionAdapter = (source?: ApiDealPositionDto | null): DealPosition => {
  return {
    id: source?.Id,
    lotItemId: source?.LotItemId,
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2Code: source?.Okpd2Code,
    okpd2Name: source?.Okpd2Name,
    positionNumber: source?.PositionNumber,
    price: source?.Price,
    quantity: source?.Quantity,
    sum: source?.Sum,
  };
}
