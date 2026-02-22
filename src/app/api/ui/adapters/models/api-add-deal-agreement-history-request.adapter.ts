import { AddDealAgreementHistoryRequestAlt } from '../../models/add-deal-agreement-history-request-alt.interface';
import { ApiAddDealAgreementHistoryRequestAltDto } from '../../../swagger/models/api-add-deal-agreement-history-request';
import { apiDealAgreementHistoryTypeEnumAdapter } from '../enums/api-deal-agreement-history-type-enum.adapter';
import { apiFileInfoAltDtoAdapter } from './api-file-info.adapter';

export const apiAddDealAgreementHistoryRequestAltDtoAdapter = (source?: AddDealAgreementHistoryRequestAlt | null): ApiAddDealAgreementHistoryRequestAltDto => {
  return {
    BuyerId: source?.buyerId,
    DealAgreementDocuments: source?.dealAgreementDocuments?.map((item) => apiFileInfoAltDtoAdapter(item)),
    DealId: source?.dealId,
    OwnerId: source?.ownerId,
    SellerId: source?.sellerId,
    TradeId: source?.tradeId,
    Type: source?.type === null ? undefined : apiDealAgreementHistoryTypeEnumAdapter(source?.type),
  };
}
