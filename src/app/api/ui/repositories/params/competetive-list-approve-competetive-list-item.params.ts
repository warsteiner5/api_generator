import { CompetetiveListApproveCompetetiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-approve-competetive-list-item';

// @ts-ignore
export interface CompetetiveListApproveCompetetiveListItemParams {
  id: number;
}

export function competetiveListApproveCompetetiveListItemAdapter(params?: CompetetiveListApproveCompetetiveListItemParams): CompetetiveListApproveCompetetiveListItem$Params {
  if (!params) {
    return {} as CompetetiveListApproveCompetetiveListItem$Params;
  }
  return {
      id: params.id,
  };
}
