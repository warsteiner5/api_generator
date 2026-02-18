import { ApiSingleSupplierTradeProductAltDto } from '../../../swagger/models/api-single-supplier-trade-product';
import { SingleSupplierTradeProductAlt } from '../../models/single-supplier-trade-product-alt.interface';
import { adaptMyTermsAltToUI } from './my-terms-alt.adapter';
import { adaptNationalModeRequirementTypeEnumToUI } from './national-mode-requirement-type-enum.adapter';

export function adaptSingleSupplierTradeProductAltToUI(source?: ApiSingleSupplierTradeProductAltDto | null): SingleSupplierTradeProductAlt {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    nationalModeRequirementType: adaptNationalModeRequirementTypeEnumToUI(source?.NationalModeRequirementType),
    offerId: source?.OfferId ?? 0,
    offerTerms: adaptMyTermsAltToUI(source?.OfferTerms),
    pictureGuid: source?.PictureGuid ?? '',
    positionNumber: source?.PositionNumber ?? 0,
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
    sum: source?.Sum ?? 0,
    sumWithVat: source?.SumWithVat ?? 0,
  };
}
