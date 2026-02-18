import { CompetetiveListCanPublish$Params } from '../../../swagger/fn/competetive-list/competetive-list-can-publish';

export interface CompetetiveListCanPublishParams {
  requirementRequestId: number;
}

export const competetiveListCanPublishParamsAdapter = {
  adapt(params?: CompetetiveListCanPublishParams): CompetetiveListCanPublish$Params {
    if (!params) {
      return {} as CompetetiveListCanPublish$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
    };
  }
};
