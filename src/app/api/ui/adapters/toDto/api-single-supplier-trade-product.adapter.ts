import { SingleSupplierTradeProductAlt } from '../../models/single-supplier-trade-product-alt.interface';
import { ApiSingleSupplierTradeProductAltDto } from '../../../swagger/models/api-single-supplier-trade-product';
import { adaptApiMyTermsAltDto } from './api-my-terms.adapter';
import { adaptApiNationalModeRequirementTypeEnum } from './api-national-mode-requirement-type-enum.adapter';

export function adaptApiSingleSupplierTradeProductAltDto(source?: SingleSupplierTradeProductAlt | null): ApiSingleSupplierTradeProductAltDto {
  return {
    Id: source?.id,
    Name: source?.name,
    NationalModeRequirementType: adaptApiNationalModeRequirementTypeEnum(source?.nationalModeRequirementType),
    OfferId: source?.offerId,
    OfferTerms: adaptApiMyTermsAltDto(source?.offerTerms),
    PictureGuid: source?.pictureGuid,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
    SumWithVat: source?.sumWithVat,
  };
}
