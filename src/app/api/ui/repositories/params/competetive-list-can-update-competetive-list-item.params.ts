import { CompetetiveListCanUpdateCompetetiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-can-update-competetive-list-item';

// @ts-ignore
export interface CompetetiveListCanUpdateCompetetiveListItemParams {
  competitiveListId: number;
}

export function competetiveListCanUpdateCompetetiveListItemAdapter(params?: CompetetiveListCanUpdateCompetetiveListItemParams): CompetetiveListCanUpdateCompetetiveListItem$Params {
  if (!params) {
    return {} as CompetetiveListCanUpdateCompetetiveListItem$Params;
  }
  return {
      competitiveListId: params.competitiveListId,
  };
}
