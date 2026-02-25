import { ApiStreamAltDto } from '../../../swagger/models/api-stream';
import { StreamAlt } from '../../models/stream-alt.interface';
import { marshalByRefObjectAltAdapter } from './marshal-by-ref-object-alt.adapter';

export const streamAltAdapter = (source?: ApiStreamAltDto | null): StreamAlt => {
  return {
    ...marshalByRefObjectAltAdapter(source as unknown as Parameters<typeof marshalByRefObjectAltAdapter>[0]),
    canTimeout: source?.CanTimeout,
    readTimeout: source?.ReadTimeout,
    writeTimeout: source?.WriteTimeout,
  };
}
