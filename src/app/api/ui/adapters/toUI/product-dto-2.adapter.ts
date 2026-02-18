import { ApiProductDto2 } from '../../../swagger/models/api-product-dto-2';
import { ProductDto2 } from '../../models/product-dto-2.interface';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';
import { adaptExternalFieldValueAltToUI } from './external-field-value-alt.adapter';
import { adaptJustificationForNonUseNationalModeTypeEnumToUI } from './justification-for-non-use-national-mode-type-enum.adapter';
import { adaptKtruCharacteristicValuesToUI } from './ktru-characteristic-values.adapter';
import { adaptNationalModeRequirementTypeEnumToUI } from './national-mode-requirement-type-enum.adapter';
import { adaptOkpd2CodeMarketToUI } from './okpd-2-code-market.adapter';
import { adaptTruTypeEnumToUI } from './tru-type-enum.adapter';
import { adaptUsedClassificatorTypeEnumToUI } from './used-classificator-type-enum.adapter';

export function adaptProductDto2ToUI(source?: ApiProductDto2 | null): ProductDto2 {
  return {
    classificatorCode: source?.ClassificatorCode ?? '',
    classificatorDescription: source?.ClassificatorDescription ?? '',
    classificatorType: adaptUsedClassificatorTypeEnumToUI(source?.ClassificatorType),
    description: source?.Description ?? '',
    externalFieldValues: (source?.ExternalFieldValues ?? []).map((item) => adaptExternalFieldValueAltToUI(item)),
    gost: source?.Gost ?? '',
    id: source?.Id ?? 0,
    justificationForNonUseNationalModeAdditionalInfo: source?.JustificationForNonUseNationalModeAdditionalInfo ?? '',
    justificationForNonUseNationalModeType: adaptJustificationForNonUseNationalModeTypeEnumToUI(source?.JustificationForNonUseNationalModeType),
    ksrCode: source?.KsrCode ?? '',
    ksrName: source?.KsrName ?? '',
    ksrUnit: source?.KsrUnit ?? '',
    ksrUnitQuantity: source?.KsrUnitQuantity ?? 0,
    ktruCharacteristicValues: (source?.KtruCharacteristicValues ?? []).map((item) => adaptKtruCharacteristicValuesToUI(item)),
    ktruCode: source?.KtruCode ?? '',
    ktruInfo: source?.KtruInfo ?? '',
    ktruName: source?.KtruName ?? '',
    ktruSpecification: source?.KtruSpecification ?? '',
    ktruVersionNumber: source?.KtruVersionNumber ?? 0,
    mark: source?.Mark ?? '',
    name: source?.Name ?? '',
    nationalModeRequirementType: adaptNationalModeRequirementTypeEnumToUI(source?.NationalModeRequirementType),
    offerId: source?.OfferId ?? 0,
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2Codes: (source?.Okpd2Codes ?? []).map((item) => adaptOkpd2CodeMarketToUI(item)),
    okved2Code: source?.Okved2Code ?? '',
    parameters: source?.Parameters ?? '',
    positionNumber: source?.PositionNumber ?? 0,
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
    sum: source?.Sum ?? 0,
    sumWithVat: source?.SumWithVat ?? 0,
    type: adaptTruTypeEnumToUI(source?.Type),
    uniqueId: source?.UniqueId ?? '',
    userDictionaryPositionName: source?.UserDictionaryPositionName ?? '',
    userDictionaryPositionNumber: source?.UserDictionaryPositionNumber ?? '',
    vatRate: adaptAvailableVatTypeEnumToUI(source?.VatRate),
  };
}
