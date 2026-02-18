import { CompetetiveListUpdate$Params } from '../../../swagger/fn/competetive-list/competetive-list-update';
import { CompetitiveListItemForView } from '../../models/competitive-list-item-for-view.interface';
import { adaptApiCompetitiveListItemForViewDto } from '../../adapters/toDto/api-competitive-list-item-for-view-dto.adapter';

export interface CompetetiveListUpdateParams {
  competitiveListId: number;
  body?: CompetitiveListItemForView;
}

export const competetiveListUpdateParamsAdapter = {
  adapt(params?: CompetetiveListUpdateParams): CompetetiveListUpdate$Params {
    if (!params) {
      return {} as CompetetiveListUpdate$Params;
    }
    return {
      competitiveListId: params.competitiveListId,
      body: adaptApiCompetitiveListItemForViewDto(params.body),
    };
  }
};
