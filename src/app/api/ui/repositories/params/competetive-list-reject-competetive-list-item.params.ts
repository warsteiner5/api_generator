import { CompetetiveListRejectCompetetiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-reject-competetive-list-item';

export interface CompetetiveListRejectCompetetiveListItemParams {
  id: number;
}

export const competetiveListRejectCompetetiveListItemParamsAdapter = {
  adapt(params?: CompetetiveListRejectCompetetiveListItemParams): CompetetiveListRejectCompetetiveListItem$Params {
    if (!params) {
      return {} as CompetetiveListRejectCompetetiveListItem$Params;
    }
    return {
      id: params.id,
    };
  }
};
