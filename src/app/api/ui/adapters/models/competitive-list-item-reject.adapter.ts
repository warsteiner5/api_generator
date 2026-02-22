import { ApiCompetitiveListItemRejectDto } from '../../../swagger/models/api-competitive-list-item-reject-dto';
import { CompetitiveListItemReject } from '../../models/competitive-list-item-reject.interface';

export const competitiveListItemRejectAdapter = (source?: ApiCompetitiveListItemRejectDto | null): CompetitiveListItemReject => {
  return (source ?? {}) as CompetitiveListItemReject;
}
