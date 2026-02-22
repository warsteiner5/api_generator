import { ApplicationRevoke$Params } from '../../../swagger/fn/application/application-revoke';

// @ts-ignore
export interface ApplicationRevokeParams {
  applicationId: number;
}

export function applicationRevokeAdapter(params?: ApplicationRevokeParams): ApplicationRevoke$Params {
  if (!params) {
    return {} as ApplicationRevoke$Params;
  }
  return {
      applicationId: params.applicationId,
  };
}
