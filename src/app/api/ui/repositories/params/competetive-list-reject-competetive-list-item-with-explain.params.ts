import { CompetetiveListRejectCompetetiveListItemWithExplain$Params } from '../../../swagger/fn/competetive-list/competetive-list-reject-competetive-list-item-with-explain';
import { CompetitiveListItemReject } from '../../models/competitive-list-item-reject.interface';
import { adaptApiCompetitiveListItemRejectDto } from '../../adapters/toDto/api-competitive-list-item-reject-dto.adapter';

export interface CompetetiveListRejectCompetetiveListItemWithExplainParams {
  body?: CompetitiveListItemReject;
}

export const competetiveListRejectCompetetiveListItemWithExplainParamsAdapter = {
  adapt(params?: CompetetiveListRejectCompetetiveListItemWithExplainParams): CompetetiveListRejectCompetetiveListItemWithExplain$Params {
    if (!params) {
      return {} as CompetetiveListRejectCompetetiveListItemWithExplain$Params;
    }
    return {
      body: adaptApiCompetitiveListItemRejectDto(params.body),
    };
  }
};
