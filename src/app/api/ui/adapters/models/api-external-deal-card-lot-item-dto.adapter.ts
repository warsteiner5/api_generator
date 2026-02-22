import { ExternalDealCardLotItem } from '../../models/external-deal-card-lot-item.interface';
import { ApiExternalDealCardLotItemDto } from '../../../swagger/models/api-external-deal-card-lot-item-dto';

export const apiExternalDealCardLotItemDtoAdapter = (source?: ExternalDealCardLotItem | null): ApiExternalDealCardLotItemDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Code: source?.okpd2Code,
    Quantity: source?.quantity,
  };
}
