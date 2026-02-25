import { CompetitiveListItemReject } from '../../models/competitive-list-item-reject.interface';
import { ApiCompetitiveListItemRejectDto } from '../../../swagger/models/api-competitive-list-item-reject-dto';
import { apiEntityDtoOfIntegerAdapter } from './api-entity-dto-of-integer.adapter';

export const apiCompetitiveListItemRejectDtoAdapter = (source?: CompetitiveListItemReject | null): ApiCompetitiveListItemRejectDto => {
  return {
    ...apiEntityDtoOfIntegerAdapter(source as unknown as Parameters<typeof apiEntityDtoOfIntegerAdapter>[0]),
    CompetitiveListItemId: source?.competitiveListItemId,
    ExplainMessage: source?.explainMessage,
    FileGuid: source?.fileGuid,
  };
}
