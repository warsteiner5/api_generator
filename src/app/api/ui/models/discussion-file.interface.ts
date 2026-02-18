import { Document } from './document.interface';
import { UserFullNameAlt } from './user-full-name-alt.interface';

export type DiscussionFile = Document & { 'Name'?: string | null; 'UserId'?: number | null; 'UserName'?: UserFullNameAlt | null; 'Size'?: number | null; 'FileGuid'?: string; 'DiscussionId'?: number; };
