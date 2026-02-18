import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TelegramUrlAlt } from './telegram-url-alt.interface';

export type MarketJsonResultOfTelegramUrl = MarketJsonVoidResultAlt & { 'data'?: TelegramUrlAlt | null; };
