import { ApiSingleSupplierTradeProductAltDto } from '../../../swagger/models/api-single-supplier-trade-product';
import { SingleSupplierTradeProductAlt } from '../../models/single-supplier-trade-product-alt.interface';
import { myTermsAltAdapter } from './my-terms-alt.adapter';
import { nationalModeRequirementTypeEnumAdapter } from '../enums/national-mode-requirement-type-enum.adapter';

export const singleSupplierTradeProductAltAdapter = (source?: ApiSingleSupplierTradeProductAltDto | null): SingleSupplierTradeProductAlt => {
  return {
    id: source?.Id,
    name: source?.Name,
    nationalModeRequirementType: source?.NationalModeRequirementType === null ? undefined : nationalModeRequirementTypeEnumAdapter(source?.NationalModeRequirementType),
    offerId: source?.OfferId,
    offerTerms: source?.OfferTerms === null ? undefined : myTermsAltAdapter(source?.OfferTerms),
    pictureGuid: source?.PictureGuid,
    positionNumber: source?.PositionNumber,
    price: source?.Price,
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
    sum: source?.Sum,
    sumWithVat: source?.SumWithVat,
  };
}
