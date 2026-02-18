import { CompetetiveListGetCompetetiveListItemState$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-item-state';

export interface CompetetiveListGetCompetetiveListItemStateParams {
  competitiveListId: number;
}

export const competetiveListGetCompetetiveListItemStateParamsAdapter = {
  adapt(params?: CompetetiveListGetCompetetiveListItemStateParams): CompetetiveListGetCompetetiveListItemState$Params {
    if (!params) {
      return {} as CompetetiveListGetCompetetiveListItemState$Params;
    }
    return {
      competitiveListId: params.competitiveListId,
    };
  }
};
