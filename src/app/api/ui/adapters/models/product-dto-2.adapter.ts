import { ApiProductDto2 } from '../../../swagger/models/api-product-dto-2';
import { ProductDto2 } from '../../models/product-dto-2.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { externalFieldValueAltAdapter } from './external-field-value-alt.adapter';
import { justificationForNonUseNationalModeTypeEnumAdapter } from '../enums/justification-for-non-use-national-mode-type-enum.adapter';
import { ktruCharacteristicValuesAdapter } from './ktru-characteristic-values.adapter';
import { nationalModeRequirementTypeEnumAdapter } from '../enums/national-mode-requirement-type-enum.adapter';
import { okpd2CodeMarketAdapter } from './okpd-2-code-market.adapter';
import { truTypeEnumAdapter } from '../enums/tru-type-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const productDto2Adapter = (source?: ApiProductDto2 | null): ProductDto2 => {
  return {
    classificatorCode: source?.ClassificatorCode,
    classificatorDescription: source?.ClassificatorDescription,
    classificatorType: source?.ClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.ClassificatorType),
    description: source?.Description,
    externalFieldValues: source?.ExternalFieldValues?.map((item) => externalFieldValueAltAdapter(item)),
    gost: source?.Gost,
    id: source?.Id,
    justificationForNonUseNationalModeAdditionalInfo: source?.JustificationForNonUseNationalModeAdditionalInfo,
    justificationForNonUseNationalModeType: source?.JustificationForNonUseNationalModeType === null ? undefined : justificationForNonUseNationalModeTypeEnumAdapter(source?.JustificationForNonUseNationalModeType),
    ksrCode: source?.KsrCode,
    ksrName: source?.KsrName,
    ksrUnit: source?.KsrUnit,
    ksrUnitQuantity: source?.KsrUnitQuantity,
    ktruCharacteristicValues: source?.KtruCharacteristicValues?.map((item) => ktruCharacteristicValuesAdapter(item)),
    ktruCode: source?.KtruCode,
    ktruInfo: source?.KtruInfo,
    ktruName: source?.KtruName,
    ktruSpecification: source?.KtruSpecification,
    ktruVersionNumber: source?.KtruVersionNumber,
    mark: source?.Mark,
    name: source?.Name,
    nationalModeRequirementType: source?.NationalModeRequirementType === null ? undefined : nationalModeRequirementTypeEnumAdapter(source?.NationalModeRequirementType),
    offerId: source?.OfferId,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2Codes: source?.Okpd2Codes?.map((item) => okpd2CodeMarketAdapter(item)),
    okved2Code: source?.Okved2Code,
    parameters: source?.Parameters,
    positionNumber: source?.PositionNumber,
    price: source?.Price,
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
    sum: source?.Sum,
    sumWithVat: source?.SumWithVat,
    type: source?.Type === null ? undefined : truTypeEnumAdapter(source?.Type),
    uniqueId: source?.UniqueId,
    userDictionaryPositionName: source?.UserDictionaryPositionName,
    userDictionaryPositionNumber: source?.UserDictionaryPositionNumber,
    vatRate: source?.VatRate === null ? undefined : availableVatTypeEnumAdapter(source?.VatRate),
  };
}
