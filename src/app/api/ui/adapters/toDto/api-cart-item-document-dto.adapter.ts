import { CartItemDocument } from '../../models/cart-item-document.interface';
import { ApiCartItemDocumentDto } from '../../../swagger/models/api-cart-item-document-dto';

export function adaptApiCartItemDocumentDto(source?: CartItemDocument | null): ApiCartItemDocumentDto {
  return {
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FileSize: source?.fileSize,
  };
}
