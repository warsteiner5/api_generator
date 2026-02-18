import { ApiTradeInfoForCustomerAltDto } from '../../../swagger/models/api-trade-info-for-customer';
import { TradeInfoForCustomerAlt } from '../../models/trade-info-for-customer-alt.interface';
import { adaptLotStateEnumToUI } from './lot-state-enum.adapter';

export function adaptTradeInfoForCustomerAltToUI(source?: ApiTradeInfoForCustomerAltDto | null): TradeInfoForCustomerAlt {
  return {
    applicationsCount: source?.ApplicationsCount ?? 0,
    currentCustomerOrganizationId: source?.CurrentCustomerOrganizationId ?? 0,
    customerFullName: source?.CustomerFullName ?? '',
    customerOrganizationId: source?.CustomerOrganizationId ?? 0,
    downloadMetric: source?.DownloadMetric ?? 0,
    externalSystemId: source?.ExternalSystemId ?? 0,
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
    publicApplications: (source?.PublicApplications ?? null) as any,
    publicationDate: source?.PublicationDate ?? '',
    tradeLotStateName: source?.TradeLotStateName ?? '',
    tradeName: source?.TradeName ?? '',
    tradeNumber: source?.TradeNumber ?? '',
    tradeState: adaptLotStateEnumToUI(source?.TradeState),
    viewMetric: source?.ViewMetric ?? 0,
    zmoFinanceSourceString: source?.ZmoFinanceSourceString ?? '',
    zmoFzTypeString: source?.ZmoFzTypeString ?? '',
  };
}
