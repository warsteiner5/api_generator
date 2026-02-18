import { CompetetiveListCanUpdateCompetetiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-can-update-competetive-list-item';

export interface CompetetiveListCanUpdateCompetetiveListItemParams {
  competitiveListId: number;
}

export const competetiveListCanUpdateCompetetiveListItemParamsAdapter = {
  adapt(params?: CompetetiveListCanUpdateCompetetiveListItemParams): CompetetiveListCanUpdateCompetetiveListItem$Params {
    if (!params) {
      return {} as CompetetiveListCanUpdateCompetetiveListItem$Params;
    }
    return {
      competitiveListId: params.competitiveListId,
    };
  }
};
