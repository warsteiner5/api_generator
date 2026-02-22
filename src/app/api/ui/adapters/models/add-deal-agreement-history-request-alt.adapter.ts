import { ApiAddDealAgreementHistoryRequestAltDto } from '../../../swagger/models/api-add-deal-agreement-history-request';
import { AddDealAgreementHistoryRequestAlt } from '../../models/add-deal-agreement-history-request-alt.interface';
import { dealAgreementHistoryTypeEnumAdapter } from '../enums/deal-agreement-history-type-enum.adapter';
import { fileInfoAltAdapter } from './file-info-alt.adapter';

export const addDealAgreementHistoryRequestAltAdapter = (source?: ApiAddDealAgreementHistoryRequestAltDto | null): AddDealAgreementHistoryRequestAlt => {
  return {
    buyerId: source?.BuyerId,
    dealAgreementDocuments: source?.DealAgreementDocuments?.map((item) => fileInfoAltAdapter(item)),
    dealId: source?.DealId,
    ownerId: source?.OwnerId,
    sellerId: source?.SellerId,
    tradeId: source?.TradeId,
    type: source?.Type === null ? undefined : dealAgreementHistoryTypeEnumAdapter(source?.Type),
  };
}
