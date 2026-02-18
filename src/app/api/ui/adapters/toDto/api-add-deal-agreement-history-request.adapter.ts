import { AddDealAgreementHistoryRequestAlt } from '../../models/add-deal-agreement-history-request-alt.interface';
import { ApiAddDealAgreementHistoryRequestAltDto } from '../../../swagger/models/api-add-deal-agreement-history-request';
import { adaptApiDealAgreementHistoryTypeEnum } from './api-deal-agreement-history-type-enum.adapter';
import { adaptApiFileInfoAltDto } from './api-file-info.adapter';

export function adaptApiAddDealAgreementHistoryRequestAltDto(source?: AddDealAgreementHistoryRequestAlt | null): ApiAddDealAgreementHistoryRequestAltDto {
  return {
    BuyerId: source?.buyerId,
    DealAgreementDocuments: (source?.dealAgreementDocuments ?? []).map((item) => adaptApiFileInfoAltDto(item)),
    DealId: source?.dealId,
    OwnerId: source?.ownerId,
    SellerId: source?.sellerId,
    TradeId: source?.tradeId,
    Type: adaptApiDealAgreementHistoryTypeEnum(source?.type),
  };
}
