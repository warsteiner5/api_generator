/* tslint:disable */
/* eslint-disable */
import { ApiAvailableVatTypeEnum } from '../models/api-available-vat-type-enum';
import { ApiJustificationForNonUseNationalModeTypeEnum } from '../models/api-justification-for-non-use-national-mode-type-enum';
import { ApiKtruCharacteristicDto } from '../models/api-ktru-characteristic-dto';
import { ApiMyTermsAltDto } from '../models/api-my-terms';
import { ApiNationalModeRequirementTypeEnum } from '../models/api-national-mode-requirement-type-enum';
import { ApiOkpd2CodeMarketDto } from '../models/api-okpd-2-code-market-dto';
import { ApiTruTypeEnum } from '../models/api-tru-type-enum';
export interface ApiMarketTradeProductAltDto {
  CanEditKtruInfo?: boolean;
  ClassificatorCode?: string | null;
  Description?: string | null;
  Gost?: string | null;
  Id?: number;
  IsCustomPrice?: boolean | null;
  JustificationForNonUseNationalModeAdditionalInfo?: string | null;
  JustificationForNonUseNationalModeType?: ApiJustificationForNonUseNationalModeTypeEnum;
  KsrFullName?: string | null;
  KtruCharacteristics?: Array<ApiKtruCharacteristicDto> | null;
  KtruCode?: string | null;
  KtruInfo?: string | null;
  KtruName?: string | null;
  KtruSpecification?: string | null;
  Mark?: string | null;
  Name?: string | null;
  NationalModeRequirementType?: ApiNationalModeRequirementTypeEnum;
  OfferId?: number | null;
  OfferTerms?: ApiMyTermsAltDto | null;
  OkeiCode?: string | null;
  OkeiName?: string | null;
  Okpd2Code?: string | null;
  Okpd2Codes?: Array<ApiOkpd2CodeMarketDto> | null;
  Okpd2Name?: string | null;
  Okved2Code?: string | null;
  Parametrs?: string | null;
  PictureGuid?: string | null;
  PositionNumber?: number;
  Price?: number | null;
  Quantity?: number | null;
  ShortOkeiName?: string | null;
  Sum?: number | null;
  SumWithVat?: number | null;
  Type?: ApiTruTypeEnum | null;
  UserDictionaryPositionName?: string | null;
  UserDictionaryPositionNumber?: string | null;
  VatRate?: ApiAvailableVatTypeEnum | null;
}
