import { ApiCartItemDocumentDto } from '../../../swagger/models/api-cart-item-document-dto';
import { CartItemDocument } from '../../models/cart-item-document.interface';

export const cartItemDocumentAdapter = (source?: ApiCartItemDocumentDto | null): CartItemDocument => {
  return {
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fileSize: source?.FileSize,
  };
}
