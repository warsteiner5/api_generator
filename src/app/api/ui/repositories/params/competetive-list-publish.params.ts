import { CompetetiveListPublish$Params } from '../../../swagger/fn/competetive-list/competetive-list-publish';
import { CompetitiveListItemForView } from '../../models/competitive-list-item-for-view.interface';
import { apiCompetitiveListItemForViewDtoAdapter } from '../../adapters/models/api-competitive-list-item-for-view-dto.adapter';

// @ts-ignore
export interface CompetetiveListPublishParams {
  body?: CompetitiveListItemForView;
}

export function competetiveListPublishAdapter(params?: CompetetiveListPublishParams): CompetetiveListPublish$Params {
  if (!params) {
    return {} as CompetetiveListPublish$Params;
  }
  return {
      body: apiCompetitiveListItemForViewDtoAdapter(params.body),
  };
}
