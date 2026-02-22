import { NationalModeRequirementTypeEnum } from '../../enums/national-mode-requirement-type.enum';
import { ApiNationalModeRequirementTypeEnum } from '../../../swagger/models/api-national-mode-requirement-type-enum';

export const apiNationalModeRequirementTypeEnumAdapter = (source?: NationalModeRequirementTypeEnum | null): ApiNationalModeRequirementTypeEnum => {
  switch (source) {
    case NationalModeRequirementTypeEnum.WithoutRequirement:
      return ApiNationalModeRequirementTypeEnum.WithoutRequirement;
    case NationalModeRequirementTypeEnum.Prohibition:
      return ApiNationalModeRequirementTypeEnum.Prohibition;
    case NationalModeRequirementTypeEnum.Restriction:
      return ApiNationalModeRequirementTypeEnum.Restriction;
    case NationalModeRequirementTypeEnum.Exclusion:
      return ApiNationalModeRequirementTypeEnum.Exclusion;
    default:
      throw new Error(`Enum value is not defined: NationalModeRequirementTypeEnum=${String(source)}`);
  }
}
