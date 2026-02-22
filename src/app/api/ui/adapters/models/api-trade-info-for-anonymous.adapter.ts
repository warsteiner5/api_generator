import { TradeInfoForAnonymousAlt } from '../../models/trade-info-for-anonymous-alt.interface';
import { ApiTradeInfoForAnonymousAltDto } from '../../../swagger/models/api-trade-info-for-anonymous';
import { apiLotStateEnumAdapter } from '../enums/api-lot-state-enum.adapter';
import { apiTradeStateEnumAdapter } from '../enums/api-trade-state-enum.adapter';

export const apiTradeInfoForAnonymousAltDtoAdapter = (source?: TradeInfoForAnonymousAlt | null): ApiTradeInfoForAnonymousAltDto => {
  return {
    ApplicationsCount: source?.applicationsCount,
    CustomerFullName: source?.customerFullName,
    FillingApplicationEndDate: source?.fillingApplicationEndDate,
    HasApplications: source?.hasApplications,
    HasDealSignedOutsideEShop: source?.hasDealSignedOutsideEShop,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    IsHidePriceAndQuantity: source?.isHidePriceAndQuantity,
    IsImmediate: source?.isImmediate,
    IsInitialPriceDefined: source?.isInitialPriceDefined,
    IsUnitBidding: source?.isUnitBidding,
    LastModificationDate: source?.lastModificationDate,
    LotNumber: source?.lotNumber,
    OrganizerName: source?.organizerName,
    ParticipantHasApplicationsOnTrade: source?.participantHasApplicationsOnTrade,
    PublicApplications: source?.publicApplications as any,
    PublicationDate: source?.publicationDate,
    TradeLotState: source?.tradeLotState === null ? undefined : apiLotStateEnumAdapter(source?.tradeLotState),
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    TradeState: source?.tradeState === null ? undefined : apiTradeStateEnumAdapter(source?.tradeState),
    TradeStateName: source?.tradeStateName,
    ZmoFzTypeString: source?.zmoFzTypeString,
  };
}
