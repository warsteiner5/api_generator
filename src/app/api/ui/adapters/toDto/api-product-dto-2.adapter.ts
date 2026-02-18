import { ProductDto2 } from '../../models/product-dto-2.interface';
import { ApiProductDto2 } from '../../../swagger/models/api-product-dto-2';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';
import { adaptApiExternalFieldValueAltDto } from './api-external-field-value.adapter';
import { adaptApiJustificationForNonUseNationalModeTypeEnum } from './api-justification-for-non-use-national-mode-type-enum.adapter';
import { adaptApiKtruCharacteristicValuesDto } from './api-ktru-characteristic-values-dto.adapter';
import { adaptApiNationalModeRequirementTypeEnum } from './api-national-mode-requirement-type-enum.adapter';
import { adaptApiOkpd2CodeMarketDto } from './api-okpd-2-code-market-dto.adapter';
import { adaptApiTruTypeEnum } from './api-tru-type-enum.adapter';
import { adaptApiUsedClassificatorTypeEnum } from './api-used-classificator-type-enum.adapter';

export function adaptApiProductDto2(source?: ProductDto2 | null): ApiProductDto2 {
  return {
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    ClassificatorType: adaptApiUsedClassificatorTypeEnum(source?.classificatorType),
    Description: source?.description,
    ExternalFieldValues: (source?.externalFieldValues ?? []).map((item) => adaptApiExternalFieldValueAltDto(item)),
    Gost: source?.gost,
    Id: source?.id,
    JustificationForNonUseNationalModeAdditionalInfo: source?.justificationForNonUseNationalModeAdditionalInfo,
    JustificationForNonUseNationalModeType: adaptApiJustificationForNonUseNationalModeTypeEnum(source?.justificationForNonUseNationalModeType),
    KsrCode: source?.ksrCode,
    KsrName: source?.ksrName,
    KsrUnit: source?.ksrUnit,
    KsrUnitQuantity: source?.ksrUnitQuantity,
    KtruCharacteristicValues: (source?.ktruCharacteristicValues ?? []).map((item) => adaptApiKtruCharacteristicValuesDto(item)),
    KtruCode: source?.ktruCode,
    KtruInfo: source?.ktruInfo,
    KtruName: source?.ktruName,
    KtruSpecification: source?.ktruSpecification,
    KtruVersionNumber: source?.ktruVersionNumber,
    Mark: source?.mark,
    Name: source?.name,
    NationalModeRequirementType: adaptApiNationalModeRequirementTypeEnum(source?.nationalModeRequirementType),
    OfferId: source?.offerId,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: (source?.okpd2Codes ?? []).map((item) => adaptApiOkpd2CodeMarketDto(item)),
    Okved2Code: source?.okved2Code,
    Parameters: source?.parameters,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
    SumWithVat: source?.sumWithVat,
    Type: adaptApiTruTypeEnum(source?.type),
    UniqueId: source?.uniqueId,
    UserDictionaryPositionName: source?.userDictionaryPositionName,
    UserDictionaryPositionNumber: source?.userDictionaryPositionNumber,
    VatRate: adaptApiAvailableVatTypeEnum(source?.vatRate),
  };
}
