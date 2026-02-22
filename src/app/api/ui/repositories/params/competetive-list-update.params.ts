import { CompetetiveListUpdate$Params } from '../../../swagger/fn/competetive-list/competetive-list-update';
import { CompetitiveListItemForView } from '../../models/competitive-list-item-for-view.interface';
import { apiCompetitiveListItemForViewDtoAdapter } from '../../adapters/models/api-competitive-list-item-for-view-dto.adapter';

// @ts-ignore
export interface CompetetiveListUpdateParams {
  competitiveListId: number;
  body?: CompetitiveListItemForView;
}

export function competetiveListUpdateAdapter(params?: CompetetiveListUpdateParams): CompetetiveListUpdate$Params {
  if (!params) {
    return {} as CompetetiveListUpdate$Params;
  }
  return {
      competitiveListId: params.competitiveListId,
      body: apiCompetitiveListItemForViewDtoAdapter(params.body),
  };
}
