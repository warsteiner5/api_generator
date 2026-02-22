import { RejectOrderModelAlt } from '../../models/reject-order-model-alt.interface';
import { ApiRejectOrderModelAltDto } from '../../../swagger/models/api-reject-order-model';

export const apiRejectOrderModelAltDtoAdapter = (source?: RejectOrderModelAlt | null): ApiRejectOrderModelAltDto => {
  return (source ?? {}) as ApiRejectOrderModelAltDto;
}
