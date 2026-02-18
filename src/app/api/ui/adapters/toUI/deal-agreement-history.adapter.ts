import { ApiDealAgreementHistoryDto } from '../../../swagger/models/api-deal-agreement-history-dto';
import { DealAgreementHistory } from '../../models/deal-agreement-history.interface';
import { adaptDealAgreementDetailToUI } from './deal-agreement-detail.adapter';
import { adaptDealAgreementHistoryStateEnumToUI } from './deal-agreement-history-state-enum.adapter';
import { adaptDealAgreementHistoryTypeEnumToUI } from './deal-agreement-history-type-enum.adapter';

export function adaptDealAgreementHistoryToUI(source?: ApiDealAgreementHistoryDto | null): DealAgreementHistory {
  return {
    agreementState: adaptDealAgreementHistoryStateEnumToUI(source?.AgreementState),
    buyerOrgId: source?.BuyerOrgId ?? 0,
    dateTimeCreated: source?.DateTimeCreated ?? '',
    dealChangeDetails: (source?.DealChangeDetails ?? []).map((item) => adaptDealAgreementDetailToUI(item)),
    dealId: source?.DealId ?? 0,
    id: source?.Id ?? 0,
    sellerOrgId: source?.SellerOrgId ?? 0,
    type: adaptDealAgreementHistoryTypeEnumToUI(source?.Type),
  };
}
