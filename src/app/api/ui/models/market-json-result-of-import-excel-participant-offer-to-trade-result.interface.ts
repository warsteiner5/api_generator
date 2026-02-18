import { ImportExcelParticipantOfferToTradeResultAlt } from './import-excel-participant-offer-to-trade-result-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfImportExcelParticipantOfferToTradeResult = MarketJsonVoidResultAlt & { 'data'?: ImportExcelParticipantOfferToTradeResultAlt | null; };
