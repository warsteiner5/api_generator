import { TradeInfoForCustomerAlt } from '../../models/trade-info-for-customer-alt.interface';
import { ApiTradeInfoForCustomerAltDto } from '../../../swagger/models/api-trade-info-for-customer';
import { apiLotStateEnumAdapter } from '../enums/api-lot-state-enum.adapter';

export const apiTradeInfoForCustomerAltDtoAdapter = (source?: TradeInfoForCustomerAlt | null): ApiTradeInfoForCustomerAltDto => {
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
    TradeState: source?.tradeState === null ? undefined : apiLotStateEnumAdapter(source?.tradeState),
    ViewMetric: source?.viewMetric,
    ZmoFinanceSourceString: source?.zmoFinanceSourceString,
    ZmoFzTypeString: source?.zmoFzTypeString,
  };
}
