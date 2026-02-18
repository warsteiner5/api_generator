import { MessageAlt } from '../../models/message-alt.interface';
import { ApiMessageAltDto } from '../../../swagger/models/api-message';

export function adaptApiMessageAltDto(source?: MessageAlt | null): ApiMessageAltDto {
  return {
    Guids: source?.guids ?? [],
    Text: source?.text,
  };
}
