import { ApiCompetitiveListItemRejectDto } from '../../../swagger/models/api-competitive-list-item-reject-dto';
import { CompetitiveListItemReject } from '../../models/competitive-list-item-reject.interface';
import { entityDtoOfIntegerAdapter } from './entity-dto-of-integer.adapter';

export const competitiveListItemRejectAdapter = (source?: ApiCompetitiveListItemRejectDto | null): CompetitiveListItemReject => {
  return {
    ...entityDtoOfIntegerAdapter(source as unknown as Parameters<typeof entityDtoOfIntegerAdapter>[0]),
    competitiveListItemId: source?.CompetitiveListItemId,
    explainMessage: source?.ExplainMessage,
    fileGuid: source?.FileGuid,
  };
}
