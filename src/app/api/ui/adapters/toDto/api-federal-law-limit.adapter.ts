import { FederalLawLimitAltEnum } from '../../enums/federal-law-limit-alt.enum';
import { ApiFederalLawLimitAltEnum } from '../../../swagger/models/api-federal-law-limit';

export function adaptApiFederalLawLimitAltEnum(source?: FederalLawLimitAltEnum | null): ApiFederalLawLimitAltEnum {
  switch (source) {
    case FederalLawLimitAltEnum.None:
      return ApiFederalLawLimitAltEnum.None;
    case FederalLawLimitAltEnum.Fz223:
      return ApiFederalLawLimitAltEnum.Fz223;
    case FederalLawLimitAltEnum.Fz44:
      return ApiFederalLawLimitAltEnum.Fz44;
    default:
      throw new Error(`Enum value is not defined: FederalLawLimitAltEnum=${String(source)}`);
  }
}
