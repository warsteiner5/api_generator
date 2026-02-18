import { ApiProductDto } from '../../../swagger/models/api-product-dto';
import { Product } from '../../models/product.interface';
import { adaptExternalFieldValueAltToUI } from './external-field-value-alt.adapter';
import { adaptJustificationForNonUseNationalModeTypeEnumToUI } from './justification-for-non-use-national-mode-type-enum.adapter';
import { adaptNationalModeRequirementTypeEnumToUI } from './national-mode-requirement-type-enum.adapter';
import { adaptOkpd2CodeToUI } from './okpd-2-code.adapter';
import { adaptTruTypeEnumToUI } from './tru-type-enum.adapter';
import { adaptUsedClassificatorTypeEnumToUI } from './used-classificator-type-enum.adapter';

export function adaptProductToUI(source?: ApiProductDto | null): Product {
  return {
    canEditKtruInfo: source?.CanEditKtruInfo ?? false,
    classificatorCode: source?.ClassificatorCode ?? '',
    classificatorDescription: source?.ClassificatorDescription ?? '',
    classificatorType: adaptUsedClassificatorTypeEnumToUI(source?.ClassificatorType),
    countryConfirmation: source?.CountryConfirmation ?? '',
    externalFieldValues: (source?.ExternalFieldValues ?? []).map((item) => adaptExternalFieldValueAltToUI(item)),
    id: source?.Id ?? 0,
    isUnitBidding: source?.IsUnitBidding ?? false,
    justificationForNonUseNationalModeAdditionalInfo: source?.JustificationForNonUseNationalModeAdditionalInfo ?? '',
    justificationForNonUseNationalModeType: adaptJustificationForNonUseNationalModeTypeEnumToUI(source?.JustificationForNonUseNationalModeType),
    ktruCode: source?.KtruCode ?? '',
    ktruInfo: source?.KtruInfo ?? '',
    ktruSpecification: source?.KtruSpecification ?? '',
    manufacturerCountryCode: source?.ManufacturerCountryCode ?? '',
    manufacturerCountryName: source?.ManufacturerCountryName ?? '',
    name: source?.Name ?? '',
    nationalModeRequirementType: adaptNationalModeRequirementTypeEnumToUI(source?.NationalModeRequirementType),
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2Codes: (source?.Okpd2Codes ?? []).map((item) => adaptOkpd2CodeToUI(item)),
    positionNumber: source?.PositionNumber ?? 0,
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
    startPrice: source?.StartPrice ?? 0,
    sum: source?.Sum ?? 0,
    type: adaptTruTypeEnumToUI(source?.Type),
    userDictionaryPositionName: source?.UserDictionaryPositionName ?? '',
    userDictionaryPositionNumber: source?.UserDictionaryPositionNumber ?? '',
  };
}
