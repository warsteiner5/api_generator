import { ApiDealAgreementDetailDto } from '../../../swagger/models/api-deal-agreement-detail-dto';
import { DealAgreementDetail } from '../../models/deal-agreement-detail.interface';

export const dealAgreementDetailAdapter = (source?: ApiDealAgreementDetailDto | null): DealAgreementDetail => {
  return {
    id: source?.Id,
    lotItemId: source?.LotItemId,
    price: source?.Price,
    quantity: source?.Quantity,
  };
}
