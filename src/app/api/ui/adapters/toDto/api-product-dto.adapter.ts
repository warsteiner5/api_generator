import { Product } from '../../models/product.interface';
import { ApiProductDto } from '../../../swagger/models/api-product-dto';
import { adaptApiExternalFieldValueAltDto } from './api-external-field-value.adapter';
import { adaptApiJustificationForNonUseNationalModeTypeEnum } from './api-justification-for-non-use-national-mode-type-enum.adapter';
import { adaptApiNationalModeRequirementTypeEnum } from './api-national-mode-requirement-type-enum.adapter';
import { adaptApiOkpd2CodeDto } from './api-okpd-2-code-dto.adapter';
import { adaptApiTruTypeEnum } from './api-tru-type-enum.adapter';
import { adaptApiUsedClassificatorTypeEnum } from './api-used-classificator-type-enum.adapter';

export function adaptApiProductDto(source?: Product | null): ApiProductDto {
  return {
    CanEditKtruInfo: source?.canEditKtruInfo,
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    ClassificatorType: adaptApiUsedClassificatorTypeEnum(source?.classificatorType),
    CountryConfirmation: source?.countryConfirmation,
    ExternalFieldValues: (source?.externalFieldValues ?? []).map((item) => adaptApiExternalFieldValueAltDto(item)),
    Id: source?.id,
    IsUnitBidding: source?.isUnitBidding,
    JustificationForNonUseNationalModeAdditionalInfo: source?.justificationForNonUseNationalModeAdditionalInfo,
    JustificationForNonUseNationalModeType: adaptApiJustificationForNonUseNationalModeTypeEnum(source?.justificationForNonUseNationalModeType),
    KtruCode: source?.ktruCode,
    KtruInfo: source?.ktruInfo,
    KtruSpecification: source?.ktruSpecification,
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    ManufacturerCountryName: source?.manufacturerCountryName,
    Name: source?.name,
    NationalModeRequirementType: adaptApiNationalModeRequirementTypeEnum(source?.nationalModeRequirementType),
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: (source?.okpd2Codes ?? []).map((item) => adaptApiOkpd2CodeDto(item)),
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    StartPrice: source?.startPrice,
    Sum: source?.sum,
    Type: adaptApiTruTypeEnum(source?.type),
    UserDictionaryPositionName: source?.userDictionaryPositionName,
    UserDictionaryPositionNumber: source?.userDictionaryPositionNumber,
  };
}
