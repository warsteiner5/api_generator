import { CompetetiveListApproveCompetetiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-approve-competetive-list-item';

export interface CompetetiveListApproveCompetetiveListItemParams {
  id: number;
}

export const competetiveListApproveCompetetiveListItemParamsAdapter = {
  adapt(params?: CompetetiveListApproveCompetetiveListItemParams): CompetetiveListApproveCompetetiveListItem$Params {
    if (!params) {
      return {} as CompetetiveListApproveCompetetiveListItem$Params;
    }
    return {
      id: params.id,
    };
  }
};
