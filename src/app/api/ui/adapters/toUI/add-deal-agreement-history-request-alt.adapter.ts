import { ApiAddDealAgreementHistoryRequestAltDto } from '../../../swagger/models/api-add-deal-agreement-history-request';
import { AddDealAgreementHistoryRequestAlt } from '../../models/add-deal-agreement-history-request-alt.interface';
import { adaptDealAgreementHistoryTypeEnumToUI } from './deal-agreement-history-type-enum.adapter';
import { adaptFileInfoAltToUI } from './file-info-alt.adapter';

export function adaptAddDealAgreementHistoryRequestAltToUI(source?: ApiAddDealAgreementHistoryRequestAltDto | null): AddDealAgreementHistoryRequestAlt {
  return {
    buyerId: source?.BuyerId ?? 0,
    dealAgreementDocuments: (source?.DealAgreementDocuments ?? []).map((item) => adaptFileInfoAltToUI(item)),
    dealId: source?.DealId ?? 0,
    ownerId: source?.OwnerId ?? 0,
    sellerId: source?.SellerId ?? 0,
    tradeId: source?.TradeId ?? 0,
    type: adaptDealAgreementHistoryTypeEnumToUI(source?.Type),
  };
}
