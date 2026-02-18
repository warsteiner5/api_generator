import { HumanometrOptionsAlt } from './humanometr-options-alt.interface';

export interface CustomerCommercialOfferRequestAlt {
  customerEmail: string;
  fileIds: string[];
  humanometrOptions: HumanometrOptionsAlt;
  message: string;
}
