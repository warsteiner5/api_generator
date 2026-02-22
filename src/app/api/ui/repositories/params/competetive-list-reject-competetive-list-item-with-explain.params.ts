import { CompetetiveListRejectCompetetiveListItemWithExplain$Params } from '../../../swagger/fn/competetive-list/competetive-list-reject-competetive-list-item-with-explain';
import { CompetitiveListItemReject } from '../../models/competitive-list-item-reject.interface';
import { apiCompetitiveListItemRejectDtoAdapter } from '../../adapters/models/api-competitive-list-item-reject-dto.adapter';

// @ts-ignore
export interface CompetetiveListRejectCompetetiveListItemWithExplainParams {
  body?: CompetitiveListItemReject;
}

export function competetiveListRejectCompetetiveListItemWithExplainAdapter(params?: CompetetiveListRejectCompetetiveListItemWithExplainParams): CompetetiveListRejectCompetetiveListItemWithExplain$Params {
  if (!params) {
    return {} as CompetetiveListRejectCompetetiveListItemWithExplain$Params;
  }
  return {
      body: apiCompetitiveListItemRejectDtoAdapter(params.body),
  };
}
