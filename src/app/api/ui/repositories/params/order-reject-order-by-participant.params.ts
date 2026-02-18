import { OrderRejectOrderByParticipant$Params } from '../../../swagger/fn/order/order-reject-order-by-participant';
import { RejectOrderModelAlt } from '../../models/reject-order-model-alt.interface';
import { adaptApiRejectOrderModelAltDto } from '../../adapters/toDto/api-reject-order-model.adapter';

export interface OrderRejectOrderByParticipantParams {
  body?: RejectOrderModelAlt;
}

export const orderRejectOrderByParticipantParamsAdapter = {
  adapt(params?: OrderRejectOrderByParticipantParams): OrderRejectOrderByParticipant$Params {
    if (!params) {
      return {} as OrderRejectOrderByParticipant$Params;
    }
    return {
      body: adaptApiRejectOrderModelAltDto(params.body),
    };
  }
};
