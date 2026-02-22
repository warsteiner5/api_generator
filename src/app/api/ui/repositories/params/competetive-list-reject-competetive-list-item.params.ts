import { CompetetiveListRejectCompetetiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-reject-competetive-list-item';

// @ts-ignore
export interface CompetetiveListRejectCompetetiveListItemParams {
  id: number;
}

export function competetiveListRejectCompetetiveListItemAdapter(params?: CompetetiveListRejectCompetetiveListItemParams): CompetetiveListRejectCompetetiveListItem$Params {
  if (!params) {
    return {} as CompetetiveListRejectCompetetiveListItem$Params;
  }
  return {
      id: params.id,
  };
}
