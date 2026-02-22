import { CompetetiveListGetCompetetiveListItemsById$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-items-by-id';

// @ts-ignore
export interface CompetetiveListGetCompetetiveListItemsByIdParams {
  competitiveListId: number;
}

export function competetiveListGetCompetetiveListItemsByIdAdapter(params?: CompetetiveListGetCompetetiveListItemsByIdParams): CompetetiveListGetCompetetiveListItemsById$Params {
  if (!params) {
    return {} as CompetetiveListGetCompetetiveListItemsById$Params;
  }
  return {
      competitiveListId: params.competitiveListId,
  };
}
