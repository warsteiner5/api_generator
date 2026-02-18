import { ApiGetNextWorkingDateRequestAltDto } from '../../../swagger/models/api-get-next-working-date-request';
import { GetNextWorkingDateRequestAlt } from '../../models/get-next-working-date-request-alt.interface';

export function adaptGetNextWorkingDateRequestAltToUI(source?: ApiGetNextWorkingDateRequestAltDto | null): GetNextWorkingDateRequestAlt {
  return {
    fromDate: source?.FromDate ?? '',
    skipDays: source?.SkipDays ?? 0,
  };
}
