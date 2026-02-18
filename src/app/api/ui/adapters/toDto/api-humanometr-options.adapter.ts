import { HumanometrOptionsAlt } from '../../models/humanometr-options-alt.interface';
import { ApiHumanometrOptionsAltDto } from '../../../swagger/models/api-humanometr-options';

export function adaptApiHumanometrOptionsAltDto(source?: HumanometrOptionsAlt | null): ApiHumanometrOptionsAltDto {
  return {
    RemoteIP: source?.remoteIP,
    UserResponse: source?.userResponse,
  };
}
