import { ApiComplaintsCountInfoDto } from '../../../swagger/models/api-complaints-count-info-dto';
import { ComplaintsCountInfo } from '../../models/complaints-count-info.interface';

export const complaintsCountInfoAdapter = (source?: ApiComplaintsCountInfoDto | null): ComplaintsCountInfo => {
  return {
    closedCount: source?.ClosedCount,
    newCount: source?.NewCount,
  };
}
