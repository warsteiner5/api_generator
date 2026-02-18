import { FileInfoForSign } from './file-info-for-sign.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfFileInfoForSign = MarketJsonVoidResultAlt & { 'data'?: FileInfoForSign | null; };
