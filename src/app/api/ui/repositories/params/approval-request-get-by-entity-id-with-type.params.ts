import { ApprovalRequestGetByEntityIdWithType$Params } from '../../../swagger/fn/approval-request/approval-request-get-by-entity-id-with-type';
import { ApprovalRequestGetOrCreateRequestAlt } from '../../models/approval-request-get-or-create-request-alt.interface';
import { adaptApiApprovalRequestGetOrCreateRequestAltDto } from '../../adapters/toDto/api-approval-request-get-or-create-request.adapter';

export interface ApprovalRequestGetByEntityIdWithTypeParams {
  body?: ApprovalRequestGetOrCreateRequestAlt;
}

export const approvalRequestGetByEntityIdWithTypeParamsAdapter = {
  adapt(params?: ApprovalRequestGetByEntityIdWithTypeParams): ApprovalRequestGetByEntityIdWithType$Params {
    if (!params) {
      return {} as ApprovalRequestGetByEntityIdWithType$Params;
    }
    return {
      body: adaptApiApprovalRequestGetOrCreateRequestAltDto(params.body),
    };
  }
};
