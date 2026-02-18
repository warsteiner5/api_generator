/* tslint:disable */
/* eslint-disable */
import { ApiAdditionalServiceDto } from '../models/api-additional-service-dto';
import { ApiApplicationDocumentDto2 } from '../models/api-application-document-dto-2';
import { ApiContactInfoDto } from '../models/api-contact-info-dto';
import { ApiQuotationSessionFinalProposalItemAltDto } from '../models/api-quotation-session-final-proposal-item';
export interface ApiQuotationSessionFinalProposalNewAltDto {
  AdditionalServices?: Array<ApiAdditionalServiceDto> | null;
  ApplicationDocuments?: Array<ApiApplicationDocumentDto2> | null;
  BankingDetailId?: number | null;
  BiddingQuotation?: number;
  ContactInfo?: ApiContactInfoDto | null;
  Items?: Array<ApiQuotationSessionFinalProposalItemAltDto> | null;
  Quotation?: number | null;
  TradeGuid?: string;
}
