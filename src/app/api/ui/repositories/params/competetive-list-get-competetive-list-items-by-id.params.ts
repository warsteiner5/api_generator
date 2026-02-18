import { CompetetiveListGetCompetetiveListItemsById$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-items-by-id';

export interface CompetetiveListGetCompetetiveListItemsByIdParams {
  competitiveListId: number;
}

export const competetiveListGetCompetetiveListItemsByIdParamsAdapter = {
  adapt(params?: CompetetiveListGetCompetetiveListItemsByIdParams): CompetetiveListGetCompetetiveListItemsById$Params {
    if (!params) {
      return {} as CompetetiveListGetCompetetiveListItemsById$Params;
    }
    return {
      competitiveListId: params.competitiveListId,
    };
  }
};
