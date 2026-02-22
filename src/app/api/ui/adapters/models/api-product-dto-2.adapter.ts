import { ProductDto2 } from '../../models/product-dto-2.interface';
import { ApiProductDto2 } from '../../../swagger/models/api-product-dto-2';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiExternalFieldValueAltDtoAdapter } from './api-external-field-value.adapter';
import { apiJustificationForNonUseNationalModeTypeEnumAdapter } from '../enums/api-justification-for-non-use-national-mode-type-enum.adapter';
import { apiKtruCharacteristicValuesDtoAdapter } from './api-ktru-characteristic-values-dto.adapter';
import { apiNationalModeRequirementTypeEnumAdapter } from '../enums/api-national-mode-requirement-type-enum.adapter';
import { apiOkpd2CodeMarketDtoAdapter } from './api-okpd-2-code-market-dto.adapter';
import { apiTruTypeEnumAdapter } from '../enums/api-tru-type-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiProductDto2Adapter = (source?: ProductDto2 | null): ApiProductDto2 => {
  return {
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    ClassificatorType: source?.classificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.classificatorType),
    Description: source?.description,
    ExternalFieldValues: source?.externalFieldValues?.map((item) => apiExternalFieldValueAltDtoAdapter(item)),
    Gost: source?.gost,
    Id: source?.id,
    JustificationForNonUseNationalModeAdditionalInfo: source?.justificationForNonUseNationalModeAdditionalInfo,
    JustificationForNonUseNationalModeType: source?.justificationForNonUseNationalModeType === null ? undefined : apiJustificationForNonUseNationalModeTypeEnumAdapter(source?.justificationForNonUseNationalModeType),
    KsrCode: source?.ksrCode,
    KsrName: source?.ksrName,
    KsrUnit: source?.ksrUnit,
    KsrUnitQuantity: source?.ksrUnitQuantity,
    KtruCharacteristicValues: source?.ktruCharacteristicValues?.map((item) => apiKtruCharacteristicValuesDtoAdapter(item)),
    KtruCode: source?.ktruCode,
    KtruInfo: source?.ktruInfo,
    KtruName: source?.ktruName,
    KtruSpecification: source?.ktruSpecification,
    KtruVersionNumber: source?.ktruVersionNumber,
    Mark: source?.mark,
    Name: source?.name,
    NationalModeRequirementType: source?.nationalModeRequirementType === null ? undefined : apiNationalModeRequirementTypeEnumAdapter(source?.nationalModeRequirementType),
    OfferId: source?.offerId,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: source?.okpd2Codes?.map((item) => apiOkpd2CodeMarketDtoAdapter(item)),
    Okved2Code: source?.okved2Code,
    Parameters: source?.parameters,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
    SumWithVat: source?.sumWithVat,
    Type: source?.type === null ? undefined : apiTruTypeEnumAdapter(source?.type),
    UniqueId: source?.uniqueId,
    UserDictionaryPositionName: source?.userDictionaryPositionName,
    UserDictionaryPositionNumber: source?.userDictionaryPositionNumber,
    VatRate: source?.vatRate === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.vatRate),
  };
}
