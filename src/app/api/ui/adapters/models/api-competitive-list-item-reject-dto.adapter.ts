import { CompetitiveListItemReject } from '../../models/competitive-list-item-reject.interface';
import { ApiCompetitiveListItemRejectDto } from '../../../swagger/models/api-competitive-list-item-reject-dto';

export const apiCompetitiveListItemRejectDtoAdapter = (source?: CompetitiveListItemReject | null): ApiCompetitiveListItemRejectDto => {
  return (source ?? {}) as ApiCompetitiveListItemRejectDto;
}
