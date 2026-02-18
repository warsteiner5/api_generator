/* tslint:disable */
/* eslint-disable */
import { ApiMarketParticipantOfferInfoDto } from '../models/api-market-participant-offer-info-dto';
export interface ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto {
  currentPage?: number;
  items?: Array<ApiMarketParticipantOfferInfoDto> | null;
  total?: number;
  totalPages?: number;
}
