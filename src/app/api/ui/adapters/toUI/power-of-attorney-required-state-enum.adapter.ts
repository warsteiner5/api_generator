import { ApiPowerOfAttorneyRequiredStateEnum } from '../../../swagger/models/api-power-of-attorney-required-state-enum';
import { PowerOfAttorneyRequiredStateEnum } from '../../enums/power-of-attorney-required-state.enum';

export function adaptPowerOfAttorneyRequiredStateEnumToUI(source?: ApiPowerOfAttorneyRequiredStateEnum | null): PowerOfAttorneyRequiredStateEnum {
  switch (source) {
    case ApiPowerOfAttorneyRequiredStateEnum.NotRequired:
      return PowerOfAttorneyRequiredStateEnum.NotRequired;
    case ApiPowerOfAttorneyRequiredStateEnum.Required:
      return PowerOfAttorneyRequiredStateEnum.Required;
    case ApiPowerOfAttorneyRequiredStateEnum.NotNeed:
      return PowerOfAttorneyRequiredStateEnum.NotNeed;
    default:
      throw new Error(`Enum value is not defined: ApiPowerOfAttorneyRequiredStateEnum=${String(source)}`);
  }
}
