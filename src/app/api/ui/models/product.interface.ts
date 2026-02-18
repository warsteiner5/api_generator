import { ExternalFieldValueAlt } from './external-field-value-alt.interface';
import { JustificationForNonUseNationalModeTypeEnum } from '../enums/justification-for-non-use-national-mode-type.enum';
import { NationalModeRequirementTypeEnum } from '../enums/national-mode-requirement-type.enum';
import { Okpd2Code } from './okpd-2-code.interface';
import { TruTypeEnum } from '../enums/tru-type.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

export interface Product {
  canEditKtruInfo: boolean;
  classificatorCode: string;
  classificatorDescription: string;
  classificatorType: UsedClassificatorTypeEnum;
  countryConfirmation: string;
  externalFieldValues: ExternalFieldValueAlt[];
  id: number;
  isUnitBidding: boolean;
  justificationForNonUseNationalModeAdditionalInfo: string;
  justificationForNonUseNationalModeType: JustificationForNonUseNationalModeTypeEnum;
  ktruCode: string;
  ktruInfo: string;
  ktruSpecification: string;
  manufacturerCountryCode: string;
  manufacturerCountryName: string;
  name: string;
  nationalModeRequirementType: NationalModeRequirementTypeEnum;
  okeiCode: string;
  okeiDescription: string;
  okpd2Codes: Okpd2Code[];
  positionNumber: number;
  price: number;
  quantity: number;
  shortOkeiName: string;
  startPrice: number;
  sum: number;
  type: TruTypeEnum;
  userDictionaryPositionName: string;
  userDictionaryPositionNumber: string;
}
