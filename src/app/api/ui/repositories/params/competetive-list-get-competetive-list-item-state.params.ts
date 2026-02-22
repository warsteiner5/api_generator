import { CompetetiveListGetCompetetiveListItemState$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-item-state';

// @ts-ignore
export interface CompetetiveListGetCompetetiveListItemStateParams {
  competitiveListId: number;
}

export function competetiveListGetCompetetiveListItemStateAdapter(params?: CompetetiveListGetCompetetiveListItemStateParams): CompetetiveListGetCompetetiveListItemState$Params {
  if (!params) {
    return {} as CompetetiveListGetCompetetiveListItemState$Params;
  }
  return {
      competitiveListId: params.competitiveListId,
  };
}
