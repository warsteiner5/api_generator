import { ApiTimeZoneInformationDto } from '../../../swagger/models/api-time-zone-information-dto';
import { TimeZoneInformation } from '../../models/time-zone-information.interface';

export const timeZoneInformationAdapter = (source?: ApiTimeZoneInformationDto | null): TimeZoneInformation => {
  return {
    displayName: source?.DisplayName,
    timeZoneId: source?.TimeZoneId,
  };
}
