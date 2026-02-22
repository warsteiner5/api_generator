import { MikIntegrationSentForParticipantApprove$Params } from '../../../swagger/fn/mik-integration/mik-integration-sent-for-participant-approve';

// @ts-ignore
export interface MikIntegrationSentForParticipantApproveParams {
  tenantId: number;
}

export function mikIntegrationSentForParticipantApproveAdapter(params?: MikIntegrationSentForParticipantApproveParams): MikIntegrationSentForParticipantApprove$Params {
  if (!params) {
    return {} as MikIntegrationSentForParticipantApprove$Params;
  }
  return {
      tenantId: params.tenantId,
  };
}
