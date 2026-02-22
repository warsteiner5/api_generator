import { CommonFile } from './common-file.interface';
import { FullDeal } from './full-deal.interface';

// @ts-ignore
export interface MarketFullDeal extends FullDeal {
  customerId: number;
  customerGuid: string;
  customerName: string;
  customerExternalOrganizationId: string;
  customerSource: number;
  deliveryTerms: string;
  relatedFiles: CommonFile[];
  createdDate: string;
  deliveryPlace: string;
  contractGuarantee: boolean;
  applicationPrice: number;
  supplierSignDate: string;
  customerSignDate: string;
}
