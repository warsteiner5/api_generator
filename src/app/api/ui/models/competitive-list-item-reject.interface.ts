import { EntityDtoOfInteger } from './entity-dto-of-integer.interface';

export type CompetitiveListItemReject = EntityDtoOfInteger & { 'CompetitiveListItemId'?: number; 'ExplainMessage'?: string | null; 'FileGuid'?: string | null; };
