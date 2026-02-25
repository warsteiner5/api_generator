import { StreamAlt } from '../../models/stream-alt.interface';
import { ApiStreamAltDto } from '../../../swagger/models/api-stream';
import { apiMarshalByRefObjectAltDtoAdapter } from './api-marshal-by-ref-object.adapter';

export const apiStreamAltDtoAdapter = (source?: StreamAlt | null): ApiStreamAltDto => {
  return {
    ...apiMarshalByRefObjectAltDtoAdapter(source as unknown as Parameters<typeof apiMarshalByRefObjectAltDtoAdapter>[0]),
    CanTimeout: source?.canTimeout,
    ReadTimeout: source?.readTimeout,
    WriteTimeout: source?.writeTimeout,
  };
}
