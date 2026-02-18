import { ApiMarketTradeProductAltDto } from '../../../swagger/models/api-market-trade-product';
import { MarketTradeProductAlt } from '../../models/market-trade-product-alt.interface';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';
import { adaptJustificationForNonUseNationalModeTypeEnumToUI } from './justification-for-non-use-national-mode-type-enum.adapter';
import { adaptKtruCharacteristicToUI } from './ktru-characteristic.adapter';
import { adaptMyTermsAltToUI } from './my-terms-alt.adapter';
import { adaptNationalModeRequirementTypeEnumToUI } from './national-mode-requirement-type-enum.adapter';
import { adaptOkpd2CodeMarketToUI } from './okpd-2-code-market.adapter';
import { adaptTruTypeEnumToUI } from './tru-type-enum.adapter';

export function adaptMarketTradeProductAltToUI(source?: ApiMarketTradeProductAltDto | null): MarketTradeProductAlt {
  return {
    canEditKtruInfo: source?.CanEditKtruInfo ?? false,
    classificatorCode: source?.ClassificatorCode ?? '',
    description: source?.Description ?? '',
    gost: source?.Gost ?? '',
    id: source?.Id ?? 0,
    isCustomPrice: source?.IsCustomPrice ?? false,
    justificationForNonUseNationalModeAdditionalInfo: source?.JustificationForNonUseNationalModeAdditionalInfo ?? '',
    justificationForNonUseNationalModeType: adaptJustificationForNonUseNationalModeTypeEnumToUI(source?.JustificationForNonUseNationalModeType),
    ksrFullName: source?.KsrFullName ?? '',
    ktruCharacteristics: (source?.KtruCharacteristics ?? []).map((item) => adaptKtruCharacteristicToUI(item)),
    ktruCode: source?.KtruCode ?? '',
    ktruInfo: source?.KtruInfo ?? '',
    ktruName: source?.KtruName ?? '',
    ktruSpecification: source?.KtruSpecification ?? '',
    mark: source?.Mark ?? '',
    name: source?.Name ?? '',
    nationalModeRequirementType: adaptNationalModeRequirementTypeEnumToUI(source?.NationalModeRequirementType),
    offerId: source?.OfferId ?? 0,
    offerTerms: adaptMyTermsAltToUI(source?.OfferTerms),
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Codes: (source?.Okpd2Codes ?? []).map((item) => adaptOkpd2CodeMarketToUI(item)),
    okpd2Name: source?.Okpd2Name ?? '',
    okved2Code: source?.Okved2Code ?? '',
    parametrs: source?.Parametrs ?? '',
    pictureGuid: source?.PictureGuid ?? '',
    positionNumber: source?.PositionNumber ?? 0,
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
    sum: source?.Sum ?? 0,
    sumWithVat: source?.SumWithVat ?? 0,
    type: adaptTruTypeEnumToUI(source?.Type),
    userDictionaryPositionName: source?.UserDictionaryPositionName ?? '',
    userDictionaryPositionNumber: source?.UserDictionaryPositionNumber ?? '',
    vatRate: adaptAvailableVatTypeEnumToUI(source?.VatRate),
  };
}
