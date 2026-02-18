import { ApiDealAgreementDetailDto } from '../../../swagger/models/api-deal-agreement-detail-dto';
import { DealAgreementDetail } from '../../models/deal-agreement-detail.interface';

export function adaptDealAgreementDetailToUI(source?: ApiDealAgreementDetailDto | null): DealAgreementDetail {
  return {
    id: source?.Id ?? 0,
    lotItemId: source?.LotItemId ?? 0,
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
  };
}
