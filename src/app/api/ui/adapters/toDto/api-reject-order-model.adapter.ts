import { RejectOrderModelAlt } from '../../models/reject-order-model-alt.interface';
import { ApiRejectOrderModelAltDto } from '../../../swagger/models/api-reject-order-model';

export function adaptApiRejectOrderModelAltDto(source?: RejectOrderModelAlt | null): ApiRejectOrderModelAltDto {
  return (source ?? {}) as ApiRejectOrderModelAltDto;
}
