import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrganizanizationFullCard } from './organizanization-full-card.interface';

export type MarketJsonResultOfOrganizanizationFullCard = MarketJsonVoidResultAlt & { 'data'?: OrganizanizationFullCard | null; };
