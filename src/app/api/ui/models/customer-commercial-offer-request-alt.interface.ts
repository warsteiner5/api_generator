import { HumanometrOptionsAlt } from './humanometr-options-alt.interface';

// @ts-ignore
export interface CustomerCommercialOfferRequestAlt {
  customerEmail: string;
  fileIds: string[];
  humanometrOptions: HumanometrOptionsAlt;
  message: string;
}
