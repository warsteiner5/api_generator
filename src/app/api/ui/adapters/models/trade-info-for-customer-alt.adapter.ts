import { ApiTradeInfoForCustomerAltDto } from '../../../swagger/models/api-trade-info-for-customer';
import { TradeInfoForCustomerAlt } from '../../models/trade-info-for-customer-alt.interface';
import { lotStateEnumAdapter } from '../enums/lot-state-enum.adapter';

export const tradeInfoForCustomerAltAdapter = (source?: ApiTradeInfoForCustomerAltDto | null): TradeInfoForCustomerAlt => {
  return {
    applicationsCount: source?.ApplicationsCount,
    currentCustomerOrganizationId: source?.CurrentCustomerOrganizationId,
    customerFullName: source?.CustomerFullName,
    customerOrganizationId: source?.CustomerOrganizationId,
    downloadMetric: source?.DownloadMetric,
    externalSystemId: source?.ExternalSystemId,
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
    publicApplications: source?.PublicApplications as any,
    publicationDate: source?.PublicationDate,
    tradeLotStateName: source?.TradeLotStateName,
    tradeName: source?.TradeName,
    tradeNumber: source?.TradeNumber,
    tradeState: source?.TradeState === null ? undefined : lotStateEnumAdapter(source?.TradeState),
    viewMetric: source?.ViewMetric,
    zmoFinanceSourceString: source?.ZmoFinanceSourceString,
    zmoFzTypeString: source?.ZmoFzTypeString,
  };
}
