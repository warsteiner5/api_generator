import { ApproveOrderModelAlt } from '../../models/approve-order-model-alt.interface';
import { OrderApproveOrderByParticipant$Params } from '../../../swagger/fn/order/order-approve-order-by-participant';
import { adaptApiApproveOrderModelAltDto } from '../../adapters/toDto/api-approve-order-model.adapter';

export interface OrderApproveOrderByParticipantParams {
  body?: ApproveOrderModelAlt;
}

export const orderApproveOrderByParticipantParamsAdapter = {
  adapt(params?: OrderApproveOrderByParticipantParams): OrderApproveOrderByParticipant$Params {
    if (!params) {
      return {} as OrderApproveOrderByParticipant$Params;
    }
    return {
      body: adaptApiApproveOrderModelAltDto(params.body),
    };
  }
};
