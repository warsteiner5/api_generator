import { ApiMessageAltDto } from '../../../swagger/models/api-message';
import { MessageAlt } from '../../models/message-alt.interface';

export function adaptMessageAltToUI(source?: ApiMessageAltDto | null): MessageAlt {
  return {
    guids: source?.Guids ?? [],
    text: source?.Text ?? '',
  };
}
