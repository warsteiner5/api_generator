import { ApiSignatureStampFormatEnum } from '../../../swagger/models/api-signature-stamp-format-enum';
import { SignatureStampFormatEnum } from '../../enums/signature-stamp-format.enum';

export function adaptSignatureStampFormatEnumToUI(source?: ApiSignatureStampFormatEnum | null): SignatureStampFormatEnum {
  switch (source) {
    case ApiSignatureStampFormatEnum.Docx:
      return SignatureStampFormatEnum.Docx;
    case ApiSignatureStampFormatEnum.Pdf:
      return SignatureStampFormatEnum.Pdf;
    default:
      throw new Error(`Enum value is not defined: ApiSignatureStampFormatEnum=${String(source)}`);
  }
}
