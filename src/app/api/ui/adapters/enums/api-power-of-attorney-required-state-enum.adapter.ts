import { PowerOfAttorneyRequiredStateEnum } from '../../enums/power-of-attorney-required-state.enum';
import { ApiPowerOfAttorneyRequiredStateEnum } from '../../../swagger/models/api-power-of-attorney-required-state-enum';

export const apiPowerOfAttorneyRequiredStateEnumAdapter = (source?: PowerOfAttorneyRequiredStateEnum | null): ApiPowerOfAttorneyRequiredStateEnum => {
  switch (source) {
    case PowerOfAttorneyRequiredStateEnum.NotRequired:
      return ApiPowerOfAttorneyRequiredStateEnum.NotRequired;
    case PowerOfAttorneyRequiredStateEnum.Required:
      return ApiPowerOfAttorneyRequiredStateEnum.Required;
    case PowerOfAttorneyRequiredStateEnum.NotNeed:
      return ApiPowerOfAttorneyRequiredStateEnum.NotNeed;
    default:
      throw new Error(`Enum value is not defined: PowerOfAttorneyRequiredStateEnum=${String(source)}`);
  }
}
