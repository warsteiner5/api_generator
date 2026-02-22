import { TimeZoneInformation } from '../../models/time-zone-information.interface';
import { ApiTimeZoneInformationDto } from '../../../swagger/models/api-time-zone-information-dto';

export const apiTimeZoneInformationDtoAdapter = (source?: TimeZoneInformation | null): ApiTimeZoneInformationDto => {
  return {
    DisplayName: source?.displayName,
    TimeZoneId: source?.timeZoneId,
  };
}
