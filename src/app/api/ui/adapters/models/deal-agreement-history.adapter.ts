import { ApiDealAgreementHistoryDto } from '../../../swagger/models/api-deal-agreement-history-dto';
import { DealAgreementHistory } from '../../models/deal-agreement-history.interface';
import { dealAgreementDetailAdapter } from './deal-agreement-detail.adapter';
import { dealAgreementHistoryStateEnumAdapter } from '../enums/deal-agreement-history-state-enum.adapter';
import { dealAgreementHistoryTypeEnumAdapter } from '../enums/deal-agreement-history-type-enum.adapter';

export const dealAgreementHistoryAdapter = (source?: ApiDealAgreementHistoryDto | null): DealAgreementHistory => {
  return {
    agreementState: source?.AgreementState === null ? undefined : dealAgreementHistoryStateEnumAdapter(source?.AgreementState),
    buyerOrgId: source?.BuyerOrgId,
    dateTimeCreated: source?.DateTimeCreated,
    dealChangeDetails: source?.DealChangeDetails?.map((item) => dealAgreementDetailAdapter(item)),
    dealId: source?.DealId,
    id: source?.Id,
    sellerOrgId: source?.SellerOrgId,
    type: source?.Type === null ? undefined : dealAgreementHistoryTypeEnumAdapter(source?.Type),
  };
}
