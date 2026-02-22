import { ApiProductDto } from '../../../swagger/models/api-product-dto';
import { Product } from '../../models/product.interface';
import { externalFieldValueAltAdapter } from './external-field-value-alt.adapter';
import { justificationForNonUseNationalModeTypeEnumAdapter } from '../enums/justification-for-non-use-national-mode-type-enum.adapter';
import { nationalModeRequirementTypeEnumAdapter } from '../enums/national-mode-requirement-type-enum.adapter';
import { okpd2CodeAdapter } from './okpd-2-code.adapter';
import { truTypeEnumAdapter } from '../enums/tru-type-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const productAdapter = (source?: ApiProductDto | null): Product => {
  return {
    canEditKtruInfo: source?.CanEditKtruInfo,
    classificatorCode: source?.ClassificatorCode,
    classificatorDescription: source?.ClassificatorDescription,
    classificatorType: source?.ClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.ClassificatorType),
    countryConfirmation: source?.CountryConfirmation,
    externalFieldValues: source?.ExternalFieldValues?.map((item) => externalFieldValueAltAdapter(item)),
    id: source?.Id,
    isUnitBidding: source?.IsUnitBidding,
    justificationForNonUseNationalModeAdditionalInfo: source?.JustificationForNonUseNationalModeAdditionalInfo,
    justificationForNonUseNationalModeType: source?.JustificationForNonUseNationalModeType === null ? undefined : justificationForNonUseNationalModeTypeEnumAdapter(source?.JustificationForNonUseNationalModeType),
    ktruCode: source?.KtruCode,
    ktruInfo: source?.KtruInfo,
    ktruSpecification: source?.KtruSpecification,
    manufacturerCountryCode: source?.ManufacturerCountryCode,
    manufacturerCountryName: source?.ManufacturerCountryName,
    name: source?.Name,
    nationalModeRequirementType: source?.NationalModeRequirementType === null ? undefined : nationalModeRequirementTypeEnumAdapter(source?.NationalModeRequirementType),
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2Codes: source?.Okpd2Codes?.map((item) => okpd2CodeAdapter(item)),
    positionNumber: source?.PositionNumber,
    price: source?.Price,
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
    startPrice: source?.StartPrice,
    sum: source?.Sum,
    type: source?.Type === null ? undefined : truTypeEnumAdapter(source?.Type),
    userDictionaryPositionName: source?.UserDictionaryPositionName,
    userDictionaryPositionNumber: source?.UserDictionaryPositionNumber,
  };
}
