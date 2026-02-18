import { NationalModeRequirementTypeEnum } from '../enums/national-mode-requirement-type.enum';

export interface ImportExcelLotItemAlt {
  justificationForNonUseNationalModeAdditionalInfo: string;
  name: string;
  nationalModeRequirementType: NationalModeRequirementTypeEnum;
  okeiCode: string;
  okeiName: string;
  okpd2Code: string;
  okpd2Name: string;
  quantity: number;
  unitPrice: number;
}
