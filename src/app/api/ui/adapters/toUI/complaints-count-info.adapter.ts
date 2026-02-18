import { ApiComplaintsCountInfoDto } from '../../../swagger/models/api-complaints-count-info-dto';
import { ComplaintsCountInfo } from '../../models/complaints-count-info.interface';

export function adaptComplaintsCountInfoToUI(source?: ApiComplaintsCountInfoDto | null): ComplaintsCountInfo {
  return {
    closedCount: source?.ClosedCount ?? 0,
    newCount: source?.NewCount ?? 0,
  };
}
