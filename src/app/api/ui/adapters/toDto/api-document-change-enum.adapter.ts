import { DocumentChangeEnum } from '../../enums/document-change.enum';
import { ApiDocumentChangeEnum } from '../../../swagger/models/api-document-change-enum';

export function adaptApiDocumentChangeEnum(source?: DocumentChangeEnum | null): ApiDocumentChangeEnum {
  switch (source) {
    case DocumentChangeEnum.Unchanged:
      return ApiDocumentChangeEnum.Unchanged;
    case DocumentChangeEnum.Added:
      return ApiDocumentChangeEnum.Added;
    case DocumentChangeEnum.Changed:
      return ApiDocumentChangeEnum.Changed;
    case DocumentChangeEnum.Deleted:
      return ApiDocumentChangeEnum.Deleted;
    default:
      throw new Error(`Enum value is not defined: DocumentChangeEnum=${String(source)}`);
  }
}
