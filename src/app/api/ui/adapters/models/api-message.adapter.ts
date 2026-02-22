import { MessageAlt } from '../../models/message-alt.interface';
import { ApiMessageAltDto } from '../../../swagger/models/api-message';

export const apiMessageAltDtoAdapter = (source?: MessageAlt | null): ApiMessageAltDto => {
  return {
    Guids: source?.guids,
    Text: source?.text,
  };
}
