import { ApplicationRemoveDraft$Params } from '../../../swagger/fn/application/application-remove-draft';

export interface ApplicationRemoveDraftParams {
  applicationId: number;
}

export const applicationRemoveDraftParamsAdapter = {
  adapt(params?: ApplicationRemoveDraftParams): ApplicationRemoveDraft$Params {
    if (!params) {
      return {} as ApplicationRemoveDraft$Params;
    }
    return {
      applicationId: params.applicationId,
    };
  }
};
