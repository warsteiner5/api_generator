import { DealAgreementHistory } from '../../models/deal-agreement-history.interface';
import { ApiDealAgreementHistoryDto } from '../../../swagger/models/api-deal-agreement-history-dto';
import { apiDealAgreementDetailDtoAdapter } from './api-deal-agreement-detail-dto.adapter';
import { apiDealAgreementHistoryStateEnumAdapter } from '../enums/api-deal-agreement-history-state-enum.adapter';
import { apiDealAgreementHistoryTypeEnumAdapter } from '../enums/api-deal-agreement-history-type-enum.adapter';

export const apiDealAgreementHistoryDtoAdapter = (source?: DealAgreementHistory | null): ApiDealAgreementHistoryDto => {
  return {
    AgreementState: source?.agreementState === null ? undefined : apiDealAgreementHistoryStateEnumAdapter(source?.agreementState),
    BuyerOrgId: source?.buyerOrgId,
    DateTimeCreated: source?.dateTimeCreated,
    DealChangeDetails: source?.dealChangeDetails?.map((item) => apiDealAgreementDetailDtoAdapter(item)),
    DealId: source?.dealId,
    Id: source?.id,
    SellerOrgId: source?.sellerOrgId,
    Type: source?.type === null ? undefined : apiDealAgreementHistoryTypeEnumAdapter(source?.type),
  };
}
