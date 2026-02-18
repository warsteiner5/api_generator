import { ApiDocumentChangeEnum } from '../../../swagger/models/api-document-change-enum';
import { DocumentChangeEnum } from '../../enums/document-change.enum';

export function adaptDocumentChangeEnumToUI(source?: ApiDocumentChangeEnum | null): DocumentChangeEnum {
  switch (source) {
    case ApiDocumentChangeEnum.Unchanged:
      return DocumentChangeEnum.Unchanged;
    case ApiDocumentChangeEnum.Added:
      return DocumentChangeEnum.Added;
    case ApiDocumentChangeEnum.Changed:
      return DocumentChangeEnum.Changed;
    case ApiDocumentChangeEnum.Deleted:
      return DocumentChangeEnum.Deleted;
    default:
      throw new Error(`Enum value is not defined: ApiDocumentChangeEnum=${String(source)}`);
  }
}
