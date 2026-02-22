import { MarketTradeProductAlt } from '../../models/market-trade-product-alt.interface';
import { ApiMarketTradeProductAltDto } from '../../../swagger/models/api-market-trade-product';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiJustificationForNonUseNationalModeTypeEnumAdapter } from '../enums/api-justification-for-non-use-national-mode-type-enum.adapter';
import { apiKtruCharacteristicDtoAdapter } from './api-ktru-characteristic-dto.adapter';
import { apiMyTermsAltDtoAdapter } from './api-my-terms.adapter';
import { apiNationalModeRequirementTypeEnumAdapter } from '../enums/api-national-mode-requirement-type-enum.adapter';
import { apiOkpd2CodeMarketDtoAdapter } from './api-okpd-2-code-market-dto.adapter';
import { apiTruTypeEnumAdapter } from '../enums/api-tru-type-enum.adapter';

export const apiMarketTradeProductAltDtoAdapter = (source?: MarketTradeProductAlt | null): ApiMarketTradeProductAltDto => {
  return {
    CanEditKtruInfo: source?.canEditKtruInfo,
    ClassificatorCode: source?.classificatorCode,
    Description: source?.description,
    Gost: source?.gost,
    Id: source?.id,
    IsCustomPrice: source?.isCustomPrice,
    JustificationForNonUseNationalModeAdditionalInfo: source?.justificationForNonUseNationalModeAdditionalInfo,
    JustificationForNonUseNationalModeType: source?.justificationForNonUseNationalModeType === null ? undefined : apiJustificationForNonUseNationalModeTypeEnumAdapter(source?.justificationForNonUseNationalModeType),
    KsrFullName: source?.ksrFullName,
    KtruCharacteristics: source?.ktruCharacteristics?.map((item) => apiKtruCharacteristicDtoAdapter(item)),
    KtruCode: source?.ktruCode,
    KtruInfo: source?.ktruInfo,
    KtruName: source?.ktruName,
    KtruSpecification: source?.ktruSpecification,
    Mark: source?.mark,
    Name: source?.name,
    NationalModeRequirementType: source?.nationalModeRequirementType === null ? undefined : apiNationalModeRequirementTypeEnumAdapter(source?.nationalModeRequirementType),
    OfferId: source?.offerId,
    OfferTerms: source?.offerTerms === null ? undefined : apiMyTermsAltDtoAdapter(source?.offerTerms),
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Code: source?.okpd2Code,
    Okpd2Codes: source?.okpd2Codes?.map((item) => apiOkpd2CodeMarketDtoAdapter(item)),
    Okpd2Name: source?.okpd2Name,
    Okved2Code: source?.okved2Code,
    Parametrs: source?.parametrs,
    PictureGuid: source?.pictureGuid,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
    SumWithVat: source?.sumWithVat,
    Type: source?.type === null ? undefined : apiTruTypeEnumAdapter(source?.type),
    UserDictionaryPositionName: source?.userDictionaryPositionName,
    UserDictionaryPositionNumber: source?.userDictionaryPositionNumber,
    VatRate: source?.vatRate === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.vatRate),
  };
}
