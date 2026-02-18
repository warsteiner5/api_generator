import { ApiHumanometrOptionsAltDto } from '../../../swagger/models/api-humanometr-options';
import { HumanometrOptionsAlt } from '../../models/humanometr-options-alt.interface';

export function adaptHumanometrOptionsAltToUI(source?: ApiHumanometrOptionsAltDto | null): HumanometrOptionsAlt {
  return {
    remoteIP: source?.RemoteIP ?? '',
    userResponse: source?.UserResponse ?? '',
  };
}
