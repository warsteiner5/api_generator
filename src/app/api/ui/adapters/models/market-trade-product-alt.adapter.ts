import { ApiMarketTradeProductAltDto } from '../../../swagger/models/api-market-trade-product';
import { MarketTradeProductAlt } from '../../models/market-trade-product-alt.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { justificationForNonUseNationalModeTypeEnumAdapter } from '../enums/justification-for-non-use-national-mode-type-enum.adapter';
import { ktruCharacteristicAdapter } from './ktru-characteristic.adapter';
import { myTermsAltAdapter } from './my-terms-alt.adapter';
import { nationalModeRequirementTypeEnumAdapter } from '../enums/national-mode-requirement-type-enum.adapter';
import { okpd2CodeMarketAdapter } from './okpd-2-code-market.adapter';
import { truTypeEnumAdapter } from '../enums/tru-type-enum.adapter';

export const marketTradeProductAltAdapter = (source?: ApiMarketTradeProductAltDto | null): MarketTradeProductAlt => {
  return {
    canEditKtruInfo: source?.CanEditKtruInfo,
    classificatorCode: source?.ClassificatorCode,
    description: source?.Description,
    gost: source?.Gost,
    id: source?.Id,
    isCustomPrice: source?.IsCustomPrice,
    justificationForNonUseNationalModeAdditionalInfo: source?.JustificationForNonUseNationalModeAdditionalInfo,
    justificationForNonUseNationalModeType: source?.JustificationForNonUseNationalModeType === null ? undefined : justificationForNonUseNationalModeTypeEnumAdapter(source?.JustificationForNonUseNationalModeType),
    ksrFullName: source?.KsrFullName,
    ktruCharacteristics: source?.KtruCharacteristics?.map((item) => ktruCharacteristicAdapter(item)),
    ktruCode: source?.KtruCode,
    ktruInfo: source?.KtruInfo,
    ktruName: source?.KtruName,
    ktruSpecification: source?.KtruSpecification,
    mark: source?.Mark,
    name: source?.Name,
    nationalModeRequirementType: source?.NationalModeRequirementType === null ? undefined : nationalModeRequirementTypeEnumAdapter(source?.NationalModeRequirementType),
    offerId: source?.OfferId,
    offerTerms: source?.OfferTerms === null ? undefined : myTermsAltAdapter(source?.OfferTerms),
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    okpd2Code: source?.Okpd2Code,
    okpd2Codes: source?.Okpd2Codes?.map((item) => okpd2CodeMarketAdapter(item)),
    okpd2Name: source?.Okpd2Name,
    okved2Code: source?.Okved2Code,
    parametrs: source?.Parametrs,
    pictureGuid: source?.PictureGuid,
    positionNumber: source?.PositionNumber,
    price: source?.Price,
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
    sum: source?.Sum,
    sumWithVat: source?.SumWithVat,
    type: source?.Type === null ? undefined : truTypeEnumAdapter(source?.Type),
    userDictionaryPositionName: source?.UserDictionaryPositionName,
    userDictionaryPositionNumber: source?.UserDictionaryPositionNumber,
    vatRate: source?.VatRate === null ? undefined : availableVatTypeEnumAdapter(source?.VatRate),
  };
}
