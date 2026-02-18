/* tslint:disable */
/* eslint-disable */
import { ApiExternalFieldValueAltDto } from '../models/api-external-field-value';
import { ApiJustificationForNonUseNationalModeTypeEnum } from '../models/api-justification-for-non-use-national-mode-type-enum';
import { ApiNationalModeRequirementTypeEnum } from '../models/api-national-mode-requirement-type-enum';
import { ApiOkpd2CodeDto } from '../models/api-okpd-2-code-dto';
import { ApiTruTypeEnum } from '../models/api-tru-type-enum';
import { ApiUsedClassificatorTypeEnum } from '../models/api-used-classificator-type-enum';
export interface ApiProductDto {
  CanEditKtruInfo?: boolean;
  ClassificatorCode?: string | null;
  ClassificatorDescription?: string | null;
  ClassificatorType?: ApiUsedClassificatorTypeEnum;
  CountryConfirmation?: string | null;
  ExternalFieldValues?: Array<ApiExternalFieldValueAltDto> | null;
  Id?: number;
  IsUnitBidding?: boolean;
  JustificationForNonUseNationalModeAdditionalInfo?: string | null;
  JustificationForNonUseNationalModeType?: ApiJustificationForNonUseNationalModeTypeEnum;
  KtruCode?: string | null;
  KtruInfo?: string | null;
  KtruSpecification?: string | null;
  ManufacturerCountryCode?: string | null;
  ManufacturerCountryName?: string | null;
  Name?: string | null;
  NationalModeRequirementType?: ApiNationalModeRequirementTypeEnum;
  OkeiCode?: string | null;
  OkeiDescription?: string | null;
  Okpd2Codes?: Array<ApiOkpd2CodeDto> | null;
  PositionNumber?: number;
  Price?: number | null;
  Quantity?: number | null;
  ShortOkeiName?: string | null;
  StartPrice?: number | null;
  Sum?: number | null;
  Type?: ApiTruTypeEnum | null;
  UserDictionaryPositionName?: string | null;
  UserDictionaryPositionNumber?: string | null;
}
