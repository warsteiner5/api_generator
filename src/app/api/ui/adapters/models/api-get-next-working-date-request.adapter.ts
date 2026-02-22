import { GetNextWorkingDateRequestAlt } from '../../models/get-next-working-date-request-alt.interface';
import { ApiGetNextWorkingDateRequestAltDto } from '../../../swagger/models/api-get-next-working-date-request';

export const apiGetNextWorkingDateRequestAltDtoAdapter = (source?: GetNextWorkingDateRequestAlt | null): ApiGetNextWorkingDateRequestAltDto => {
  return {
    FromDate: source?.fromDate,
    SkipDays: source?.skipDays,
  };
}
