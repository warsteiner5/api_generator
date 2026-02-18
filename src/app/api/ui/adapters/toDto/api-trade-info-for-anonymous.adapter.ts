import { TradeInfoForAnonymousAlt } from '../../models/trade-info-for-anonymous-alt.interface';
import { ApiTradeInfoForAnonymousAltDto } from '../../../swagger/models/api-trade-info-for-anonymous';
import { adaptApiLotStateEnum } from './api-lot-state-enum.adapter';
import { adaptApiTradeStateEnum } from './api-trade-state-enum.adapter';

export function adaptApiTradeInfoForAnonymousAltDto(source?: TradeInfoForAnonymousAlt | null): ApiTradeInfoForAnonymousAltDto {
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
    TradeLotState: adaptApiLotStateEnum(source?.tradeLotState),
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    TradeState: adaptApiTradeStateEnum(source?.tradeState),
    TradeStateName: source?.tradeStateName,
    ZmoFzTypeString: source?.zmoFzTypeString,
  };
}
