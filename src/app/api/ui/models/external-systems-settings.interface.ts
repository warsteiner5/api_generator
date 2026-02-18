import { ExternalSystemToSendCart } from './external-system-to-send-cart.interface';

export interface ExternalSystemsSettings {
  externalSystemsToSendCart: ExternalSystemToSendCart[];
  isSendCartToExternalSystemsEnabled: boolean;
}
