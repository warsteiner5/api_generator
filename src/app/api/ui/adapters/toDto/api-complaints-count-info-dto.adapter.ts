import { ComplaintsCountInfo } from '../../models/complaints-count-info.interface';
import { ApiComplaintsCountInfoDto } from '../../../swagger/models/api-complaints-count-info-dto';

export function adaptApiComplaintsCountInfoDto(source?: ComplaintsCountInfo | null): ApiComplaintsCountInfoDto {
  return {
    ClosedCount: source?.closedCount,
    NewCount: source?.newCount,
  };
}
