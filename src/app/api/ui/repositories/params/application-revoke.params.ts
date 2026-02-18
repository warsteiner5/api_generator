import { ApplicationRevoke$Params } from '../../../swagger/fn/application/application-revoke';

export interface ApplicationRevokeParams {
  applicationId: number;
}

export const applicationRevokeParamsAdapter = {
  adapt(params?: ApplicationRevokeParams): ApplicationRevoke$Params {
    if (!params) {
      return {} as ApplicationRevoke$Params;
    }
    return {
      applicationId: params.applicationId,
    };
  }
};
