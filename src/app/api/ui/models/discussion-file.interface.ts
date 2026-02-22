import { Document } from './document.interface';
import { UserFullNameAlt } from './user-full-name-alt.interface';

// @ts-ignore
export interface DiscussionFile extends Document {
  name: string;
  userId: number;
  userName: UserFullNameAlt;
  size: number;
  fileGuid: string;
  discussionId: number;
}
