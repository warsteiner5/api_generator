/* tslint:disable */
/* eslint-disable */
import { ApiSignBidRequestAltDto } from '../models/api-sign-bid-request';
export interface ApiCreateBidRequestAltDto {
  ClientSignature?: string | null;
  Sent?: string;
  ServerSignature?: string | null;
  SignBidInfo?: ApiSignBidRequestAltDto | null;
  SignedData?: string | null;
}
