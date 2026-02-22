import { DealPosition } from '../../models/deal-position.interface';
import { ApiDealPositionDto } from '../../../swagger/models/api-deal-position-dto';

export const apiDealPositionDtoAdapter = (source?: DealPosition | null): ApiDealPositionDto => {
  return {
    Id: source?.id,
    LotItemId: source?.lotItemId,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
    Sum: source?.sum,
  };
}
