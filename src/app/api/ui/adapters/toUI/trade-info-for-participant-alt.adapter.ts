import { ApiTradeInfoForParticipantAltDto } from '../../../swagger/models/api-trade-info-for-participant';
import { TradeInfoForParticipantAlt } from '../../models/trade-info-for-participant-alt.interface';
import { adaptLotStateEnumToUI } from './lot-state-enum.adapter';
import { adaptTradeStateEnumToUI } from './trade-state-enum.adapter';

export function adaptTradeInfoForParticipantAltToUI(source?: ApiTradeInfoForParticipantAltDto | null): TradeInfoForParticipantAlt {
  return {
    applicationsCount: source?.ApplicationsCount ?? 0,
    customerFullName: source?.CustomerFullName ?? '',
    customerId: source?.CustomerId ?? 0,
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
    redirectUrl: source?.RedirectUrl ?? '',
    tradeLotState: adaptLotStateEnumToUI(source?.TradeLotState),
    tradeName: source?.TradeName ?? '',
    tradeNumber: source?.TradeNumber ?? '',
    tradeState: adaptTradeStateEnumToUI(source?.TradeState),
    tradeStateName: source?.TradeStateName ?? '',
    zmoFzTypeString: source?.ZmoFzTypeString ?? '',
  };
}
