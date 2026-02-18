import { DealAgreementHistoryTypeEnum } from '../../enums/deal-agreement-history-type.enum';
import { ApiDealAgreementHistoryTypeEnum } from '../../../swagger/models/api-deal-agreement-history-type-enum';

export function adaptApiDealAgreementHistoryTypeEnum(source?: DealAgreementHistoryTypeEnum | null): ApiDealAgreementHistoryTypeEnum {
  switch (source) {
    case DealAgreementHistoryTypeEnum.FromSellerToBuyer:
      return ApiDealAgreementHistoryTypeEnum.FromSellerToBuyer;
    case DealAgreementHistoryTypeEnum.FromBuyerToSeller:
      return ApiDealAgreementHistoryTypeEnum.FromBuyerToSeller;
    case DealAgreementHistoryTypeEnum.Concluded:
      return ApiDealAgreementHistoryTypeEnum.Concluded;
    case DealAgreementHistoryTypeEnum.RequestPriceQuantityToBuyer:
      return ApiDealAgreementHistoryTypeEnum.RequestPriceQuantityToBuyer;
    case DealAgreementHistoryTypeEnum.RequestPriceQuantityToSeller:
      return ApiDealAgreementHistoryTypeEnum.RequestPriceQuantityToSeller;
    case DealAgreementHistoryTypeEnum.RequestPriceQuantityConcluded:
      return ApiDealAgreementHistoryTypeEnum.RequestPriceQuantityConcluded;
    default:
      throw new Error(`Enum value is not defined: DealAgreementHistoryTypeEnum=${String(source)}`);
  }
}
