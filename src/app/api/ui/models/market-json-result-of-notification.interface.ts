import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Notification } from './notification.interface';

export type MarketJsonResultOfNotification = MarketJsonVoidResultAlt & { 'data'?: Notification | null; };
