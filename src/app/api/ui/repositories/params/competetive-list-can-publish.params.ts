import { CompetetiveListCanPublish$Params } from '../../../swagger/fn/competetive-list/competetive-list-can-publish';

// @ts-ignore
export interface CompetetiveListCanPublishParams {
  requirementRequestId: number;
}

export function competetiveListCanPublishAdapter(params?: CompetetiveListCanPublishParams): CompetetiveListCanPublish$Params {
  if (!params) {
    return {} as CompetetiveListCanPublish$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
  };
}
