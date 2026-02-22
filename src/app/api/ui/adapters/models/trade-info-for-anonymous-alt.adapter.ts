import { ApiTradeInfoForAnonymousAltDto } from '../../../swagger/models/api-trade-info-for-anonymous';
import { TradeInfoForAnonymousAlt } from '../../models/trade-info-for-anonymous-alt.interface';
import { lotStateEnumAdapter } from '../enums/lot-state-enum.adapter';
import { tradeStateEnumAdapter } from '../enums/trade-state-enum.adapter';

export const tradeInfoForAnonymousAltAdapter = (source?: ApiTradeInfoForAnonymousAltDto | null): TradeInfoForAnonymousAlt => {
  return {
    applicationsCount: source?.ApplicationsCount,
    customerFullName: source?.CustomerFullName,
    fillingApplicationEndDate: source?.FillingApplicationEndDate,
    hasApplications: source?.HasApplications,
    hasDealSignedOutsideEShop: source?.HasDealSignedOutsideEShop,
    id: source?.Id,
    initialPrice: source?.InitialPrice,
    isHidePriceAndQuantity: source?.IsHidePriceAndQuantity,
    isImmediate: source?.IsImmediate,
    isInitialPriceDefined: source?.IsInitialPriceDefined,
    isUnitBidding: source?.IsUnitBidding,
    lastModificationDate: source?.LastModificationDate,
    lotNumber: source?.LotNumber,
    organizerName: source?.OrganizerName,
    participantHasApplicationsOnTrade: source?.ParticipantHasApplicationsOnTrade,
    publicApplications: source?.PublicApplications as any,
    publicationDate: source?.PublicationDate,
    tradeLotState: source?.TradeLotState === null ? undefined : lotStateEnumAdapter(source?.TradeLotState),
    tradeName: source?.TradeName,
    tradeNumber: source?.TradeNumber,
    tradeState: source?.TradeState === null ? undefined : tradeStateEnumAdapter(source?.TradeState),
    tradeStateName: source?.TradeStateName,
    zmoFzTypeString: source?.ZmoFzTypeString,
  };
}
