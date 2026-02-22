import { SingleSupplierTradeProductAlt } from '../../models/single-supplier-trade-product-alt.interface';
import { ApiSingleSupplierTradeProductAltDto } from '../../../swagger/models/api-single-supplier-trade-product';
import { apiMyTermsAltDtoAdapter } from './api-my-terms.adapter';
import { apiNationalModeRequirementTypeEnumAdapter } from '../enums/api-national-mode-requirement-type-enum.adapter';

export const apiSingleSupplierTradeProductAltDtoAdapter = (source?: SingleSupplierTradeProductAlt | null): ApiSingleSupplierTradeProductAltDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    NationalModeRequirementType: source?.nationalModeRequirementType === null ? undefined : apiNationalModeRequirementTypeEnumAdapter(source?.nationalModeRequirementType),
    OfferId: source?.offerId,
    OfferTerms: source?.offerTerms === null ? undefined : apiMyTermsAltDtoAdapter(source?.offerTerms),
    PictureGuid: source?.pictureGuid,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
    SumWithVat: source?.sumWithVat,
  };
}
