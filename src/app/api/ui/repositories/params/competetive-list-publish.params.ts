import { CompetetiveListPublish$Params } from '../../../swagger/fn/competetive-list/competetive-list-publish';
import { CompetitiveListItemForView } from '../../models/competitive-list-item-for-view.interface';
import { adaptApiCompetitiveListItemForViewDto } from '../../adapters/toDto/api-competitive-list-item-for-view-dto.adapter';

export interface CompetetiveListPublishParams {
  body?: CompetitiveListItemForView;
}

export const competetiveListPublishParamsAdapter = {
  adapt(params?: CompetetiveListPublishParams): CompetetiveListPublish$Params {
    if (!params) {
      return {} as CompetetiveListPublish$Params;
    }
    return {
      body: adaptApiCompetitiveListItemForViewDto(params.body),
    };
  }
};
