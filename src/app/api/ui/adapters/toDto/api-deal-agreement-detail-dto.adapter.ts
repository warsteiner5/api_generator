import { DealAgreementDetail } from '../../models/deal-agreement-detail.interface';
import { ApiDealAgreementDetailDto } from '../../../swagger/models/api-deal-agreement-detail-dto';

export function adaptApiDealAgreementDetailDto(source?: DealAgreementDetail | null): ApiDealAgreementDetailDto {
  return {
    Id: source?.id,
    LotItemId: source?.lotItemId,
    Price: source?.price,
    Quantity: source?.quantity,
  };
}
