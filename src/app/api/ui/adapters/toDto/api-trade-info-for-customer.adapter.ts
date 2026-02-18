import { TradeInfoForCustomerAlt } from '../../models/trade-info-for-customer-alt.interface';
import { ApiTradeInfoForCustomerAltDto } from '../../../swagger/models/api-trade-info-for-customer';
import { adaptApiLotStateEnum } from './api-lot-state-enum.adapter';

export function adaptApiTradeInfoForCustomerAltDto(source?: TradeInfoForCustomerAlt | null): ApiTradeInfoForCustomerAltDto {
  return {
    ApplicationsCount: source?.applicationsCount,
    CurrentCustomerOrganizationId: source?.currentCustomerOrganizationId,
    CustomerFullName: source?.customerFullName,
    CustomerOrganizationId: source?.customerOrganizationId,
    DownloadMetric: source?.downloadMetric,
    ExternalSystemId: source?.externalSystemId,
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
    PublicApplications: source?.publicApplications as any,
    PublicationDate: source?.publicationDate,
    TradeLotStateName: source?.tradeLotStateName,
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    TradeState: adaptApiLotStateEnum(source?.tradeState),
    ViewMetric: source?.viewMetric,
    ZmoFinanceSourceString: source?.zmoFinanceSourceString,
    ZmoFzTypeString: source?.zmoFzTypeString,
  };
}
