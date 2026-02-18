import { MarketTradeProductAlt } from '../../models/market-trade-product-alt.interface';
import { ApiMarketTradeProductAltDto } from '../../../swagger/models/api-market-trade-product';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';
import { adaptApiJustificationForNonUseNationalModeTypeEnum } from './api-justification-for-non-use-national-mode-type-enum.adapter';
import { adaptApiKtruCharacteristicDto } from './api-ktru-characteristic-dto.adapter';
import { adaptApiMyTermsAltDto } from './api-my-terms.adapter';
import { adaptApiNationalModeRequirementTypeEnum } from './api-national-mode-requirement-type-enum.adapter';
import { adaptApiOkpd2CodeMarketDto } from './api-okpd-2-code-market-dto.adapter';
import { adaptApiTruTypeEnum } from './api-tru-type-enum.adapter';

export function adaptApiMarketTradeProductAltDto(source?: MarketTradeProductAlt | null): ApiMarketTradeProductAltDto {
  return {
    CanEditKtruInfo: source?.canEditKtruInfo,
    ClassificatorCode: source?.classificatorCode,
    Description: source?.description,
    Gost: source?.gost,
    Id: source?.id,
    IsCustomPrice: source?.isCustomPrice,
    JustificationForNonUseNationalModeAdditionalInfo: source?.justificationForNonUseNationalModeAdditionalInfo,
    JustificationForNonUseNationalModeType: adaptApiJustificationForNonUseNationalModeTypeEnum(source?.justificationForNonUseNationalModeType),
    KsrFullName: source?.ksrFullName,
    KtruCharacteristics: (source?.ktruCharacteristics ?? []).map((item) => adaptApiKtruCharacteristicDto(item)),
    KtruCode: source?.ktruCode,
    KtruInfo: source?.ktruInfo,
    KtruName: source?.ktruName,
    KtruSpecification: source?.ktruSpecification,
    Mark: source?.mark,
    Name: source?.name,
    NationalModeRequirementType: adaptApiNationalModeRequirementTypeEnum(source?.nationalModeRequirementType),
    OfferId: source?.offerId,
    OfferTerms: adaptApiMyTermsAltDto(source?.offerTerms),
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Code: source?.okpd2Code,
    Okpd2Codes: (source?.okpd2Codes ?? []).map((item) => adaptApiOkpd2CodeMarketDto(item)),
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
    Type: adaptApiTruTypeEnum(source?.type),
    UserDictionaryPositionName: source?.userDictionaryPositionName,
    UserDictionaryPositionNumber: source?.userDictionaryPositionNumber,
    VatRate: adaptApiAvailableVatTypeEnum(source?.vatRate),
  };
}
