import { ApiTradeInfoForAnonymousAltDto } from '../../../swagger/models/api-trade-info-for-anonymous';
import { TradeInfoForAnonymousAlt } from '../../models/trade-info-for-anonymous-alt.interface';
import { adaptLotStateEnumToUI } from './lot-state-enum.adapter';
import { adaptTradeStateEnumToUI } from './trade-state-enum.adapter';

export function adaptTradeInfoForAnonymousAltToUI(source?: ApiTradeInfoForAnonymousAltDto | null): TradeInfoForAnonymousAlt {
  return {
    applicationsCount: source?.ApplicationsCount ?? 0,
    customerFullName: source?.CustomerFullName ?? '',
    fillingApplicationEndDate: source?.FillingApplicationEndDate ?? '',
    hasApplications: source?.HasApplications ?? false,
    hasDealSignedOutsideEShop: source?.HasDealSignedOutsideEShop ?? false,
    id: source?.Id ?? 0,
    initialPrice: source?.InitialPrice ?? 0,
    isHidePriceAndQuantity: source?.IsHidePriceAndQuantity ?? false,
    isImmediate: source?.IsImmediate ?? false,
    isInitialPriceDefined: source?.IsInitialPriceDefined ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    lastModificationDate: source?.LastModificationDate ?? '',
    lotNumber: source?.LotNumber ?? 0,
    organizerName: source?.OrganizerName ?? '',
    participantHasApplicationsOnTrade: source?.ParticipantHasApplicationsOnTrade ?? false,
    publicApplications: (source?.PublicApplications ?? null) as any,
    publicationDate: source?.PublicationDate ?? '',
    tradeLotState: adaptLotStateEnumToUI(source?.TradeLotState),
    tradeName: source?.TradeName ?? '',
    tradeNumber: source?.TradeNumber ?? '',
    tradeState: adaptTradeStateEnumToUI(source?.TradeState),
    tradeStateName: source?.TradeStateName ?? '',
    zmoFzTypeString: source?.ZmoFzTypeString ?? '',
  };
}
