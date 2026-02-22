import { Product } from '../../models/product.interface';
import { ApiProductDto } from '../../../swagger/models/api-product-dto';
import { apiExternalFieldValueAltDtoAdapter } from './api-external-field-value.adapter';
import { apiJustificationForNonUseNationalModeTypeEnumAdapter } from '../enums/api-justification-for-non-use-national-mode-type-enum.adapter';
import { apiNationalModeRequirementTypeEnumAdapter } from '../enums/api-national-mode-requirement-type-enum.adapter';
import { apiOkpd2CodeDtoAdapter } from './api-okpd-2-code-dto.adapter';
import { apiTruTypeEnumAdapter } from '../enums/api-tru-type-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiProductDtoAdapter = (source?: Product | null): ApiProductDto => {
  return {
    CanEditKtruInfo: source?.canEditKtruInfo,
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    ClassificatorType: source?.classificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.classificatorType),
    CountryConfirmation: source?.countryConfirmation,
    ExternalFieldValues: source?.externalFieldValues?.map((item) => apiExternalFieldValueAltDtoAdapter(item)),
    Id: source?.id,
    IsUnitBidding: source?.isUnitBidding,
    JustificationForNonUseNationalModeAdditionalInfo: source?.justificationForNonUseNationalModeAdditionalInfo,
    JustificationForNonUseNationalModeType: source?.justificationForNonUseNationalModeType === null ? undefined : apiJustificationForNonUseNationalModeTypeEnumAdapter(source?.justificationForNonUseNationalModeType),
    KtruCode: source?.ktruCode,
    KtruInfo: source?.ktruInfo,
    KtruSpecification: source?.ktruSpecification,
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    ManufacturerCountryName: source?.manufacturerCountryName,
    Name: source?.name,
    NationalModeRequirementType: source?.nationalModeRequirementType === null ? undefined : apiNationalModeRequirementTypeEnumAdapter(source?.nationalModeRequirementType),
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: source?.okpd2Codes?.map((item) => apiOkpd2CodeDtoAdapter(item)),
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    StartPrice: source?.startPrice,
    Sum: source?.sum,
    Type: source?.type === null ? undefined : apiTruTypeEnumAdapter(source?.type),
    UserDictionaryPositionName: source?.userDictionaryPositionName,
    UserDictionaryPositionNumber: source?.userDictionaryPositionNumber,
  };
}
