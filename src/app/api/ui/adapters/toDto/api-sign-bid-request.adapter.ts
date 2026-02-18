import { SignBidRequestAlt } from '../../models/sign-bid-request-alt.interface';
import { ApiSignBidRequestAltDto } from '../../../swagger/models/api-sign-bid-request';

export function adaptApiSignBidRequestAltDto(source?: SignBidRequestAlt | null): ApiSignBidRequestAltDto {
  return {
    Amount: source?.amount,
    LotId: source?.lotId,
  };
}
