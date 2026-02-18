/* tslint:disable */
/* eslint-disable */
import { ApiSignBidRequestNewAltDto } from '../models/api-sign-bid-request-new';
export interface ApiCreateBidRequestNewAltDto {
  ClientSignature?: string | null;
  Sent?: string;
  ServerSignature?: string | null;
  SignBidInfo?: ApiSignBidRequestNewAltDto | null;
  SignedData?: string | null;
}
