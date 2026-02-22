import { ExternalSystemToSendCart } from './external-system-to-send-cart.interface';

// @ts-ignore
export interface ExternalSystemsSettings {
  externalSystemsToSendCart: ExternalSystemToSendCart[];
  isSendCartToExternalSystemsEnabled: boolean;
}
