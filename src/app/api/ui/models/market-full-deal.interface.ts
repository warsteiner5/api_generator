import { CommonFile } from './common-file.interface';
import { FullDeal } from './full-deal.interface';

export type MarketFullDeal = FullDeal & { 'CustomerId'?: number; 'CustomerGuid'?: string; 'CustomerName'?: string | null; 'CustomerExternalOrganizationId'?: string | null; 'CustomerSource'?: number | null; 'DeliveryTerms'?: string | null; 'RelatedFiles'?: Array<CommonFile> | null; 'CreatedDate'?: string | null; 'DeliveryPlace'?: string | null; 'ContractGuarantee'?: boolean; 'ApplicationPrice'?: number | null; 'SupplierSignDate'?: string | null; 'CustomerSignDate'?: string | null; };
