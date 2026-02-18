import { MikIntegrationSentForParticipantApprove$Params } from '../../../swagger/fn/mik-integration/mik-integration-sent-for-participant-approve';

export interface MikIntegrationSentForParticipantApproveParams {
  tenantId: number;
}

export const mikIntegrationSentForParticipantApproveParamsAdapter = {
  adapt(params?: MikIntegrationSentForParticipantApproveParams): MikIntegrationSentForParticipantApprove$Params {
    if (!params) {
      return {} as MikIntegrationSentForParticipantApprove$Params;
    }
    return {
      tenantId: params.tenantId,
    };
  }
};
