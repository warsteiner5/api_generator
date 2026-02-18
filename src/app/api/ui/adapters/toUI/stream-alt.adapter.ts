import { ApiStreamAltDto } from '../../../swagger/models/api-stream';
import { StreamAlt } from '../../models/stream-alt.interface';

export function adaptStreamAltToUI(source?: ApiStreamAltDto | null): StreamAlt {
  return (source ?? {}) as StreamAlt;
}
