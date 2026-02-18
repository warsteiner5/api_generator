import { ApiNationalModeRequirementTypeEnum } from '../../../swagger/models/api-national-mode-requirement-type-enum';
import { NationalModeRequirementTypeEnum } from '../../enums/national-mode-requirement-type.enum';

export function adaptNationalModeRequirementTypeEnumToUI(source?: ApiNationalModeRequirementTypeEnum | null): NationalModeRequirementTypeEnum {
  switch (source) {
    case ApiNationalModeRequirementTypeEnum.WithoutRequirement:
      return NationalModeRequirementTypeEnum.WithoutRequirement;
    case ApiNationalModeRequirementTypeEnum.Prohibition:
      return NationalModeRequirementTypeEnum.Prohibition;
    case ApiNationalModeRequirementTypeEnum.Restriction:
      return NationalModeRequirementTypeEnum.Restriction;
    case ApiNationalModeRequirementTypeEnum.Exclusion:
      return NationalModeRequirementTypeEnum.Exclusion;
    default:
      throw new Error(`Enum value is not defined: ApiNationalModeRequirementTypeEnum=${String(source)}`);
  }
}
