import { SignatureStampFormatEnum } from '../../enums/signature-stamp-format.enum';
import { ApiSignatureStampFormatEnum } from '../../../swagger/models/api-signature-stamp-format-enum';

export function adaptApiSignatureStampFormatEnum(source?: SignatureStampFormatEnum | null): ApiSignatureStampFormatEnum {
  switch (source) {
    case SignatureStampFormatEnum.Docx:
      return ApiSignatureStampFormatEnum.Docx;
    case SignatureStampFormatEnum.Pdf:
      return ApiSignatureStampFormatEnum.Pdf;
    default:
      throw new Error(`Enum value is not defined: SignatureStampFormatEnum=${String(source)}`);
  }
}
