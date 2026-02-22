import { ApplicationRemoveDraft$Params } from '../../../swagger/fn/application/application-remove-draft';

// @ts-ignore
export interface ApplicationRemoveDraftParams {
  applicationId: number;
}

export function applicationRemoveDraftAdapter(params?: ApplicationRemoveDraftParams): ApplicationRemoveDraft$Params {
  if (!params) {
    return {} as ApplicationRemoveDraft$Params;
  }
  return {
      applicationId: params.applicationId,
  };
}
