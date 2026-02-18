import { ApiFederalLawLimitAltEnum } from '../../../swagger/models/api-federal-law-limit';
import { FederalLawLimitAltEnum } from '../../enums/federal-law-limit-alt.enum';

export function adaptFederalLawLimitAltEnumToUI(source?: ApiFederalLawLimitAltEnum | null): FederalLawLimitAltEnum {
  switch (source) {
    case ApiFederalLawLimitAltEnum.None:
      return FederalLawLimitAltEnum.None;
    case ApiFederalLawLimitAltEnum.Fz223:
      return FederalLawLimitAltEnum.Fz223;
    case ApiFederalLawLimitAltEnum.Fz44:
      return FederalLawLimitAltEnum.Fz44;
    default:
      throw new Error(`Enum value is not defined: ApiFederalLawLimitAltEnum=${String(source)}`);
  }
}
