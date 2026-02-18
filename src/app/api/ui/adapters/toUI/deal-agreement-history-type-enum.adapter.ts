import { ApiDealAgreementHistoryTypeEnum } from '../../../swagger/models/api-deal-agreement-history-type-enum';
import { DealAgreementHistoryTypeEnum } from '../../enums/deal-agreement-history-type.enum';

export function adaptDealAgreementHistoryTypeEnumToUI(source?: ApiDealAgreementHistoryTypeEnum | null): DealAgreementHistoryTypeEnum {
  switch (source) {
    case ApiDealAgreementHistoryTypeEnum.FromSellerToBuyer:
      return DealAgreementHistoryTypeEnum.FromSellerToBuyer;
    case ApiDealAgreementHistoryTypeEnum.FromBuyerToSeller:
      return DealAgreementHistoryTypeEnum.FromBuyerToSeller;
    case ApiDealAgreementHistoryTypeEnum.Concluded:
      return DealAgreementHistoryTypeEnum.Concluded;
    case ApiDealAgreementHistoryTypeEnum.RequestPriceQuantityToBuyer:
      return DealAgreementHistoryTypeEnum.RequestPriceQuantityToBuyer;
    case ApiDealAgreementHistoryTypeEnum.RequestPriceQuantityToSeller:
      return DealAgreementHistoryTypeEnum.RequestPriceQuantityToSeller;
    case ApiDealAgreementHistoryTypeEnum.RequestPriceQuantityConcluded:
      return DealAgreementHistoryTypeEnum.RequestPriceQuantityConcluded;
    default:
      throw new Error(`Enum value is not defined: ApiDealAgreementHistoryTypeEnum=${String(source)}`);
  }
}
