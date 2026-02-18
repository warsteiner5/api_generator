/* tslint:disable */
/* eslint-disable */
import { ApiExternalSystemToSendCartDto } from '../models/api-external-system-to-send-cart-dto';
export interface ApiExternalSystemsSettingsDto {
  ExternalSystemsToSendCart?: Array<ApiExternalSystemToSendCartDto> | null;
  IsSendCartToExternalSystemsEnabled?: boolean;
}
