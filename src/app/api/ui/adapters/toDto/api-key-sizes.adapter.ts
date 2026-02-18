import { KeySizesAlt } from '../../models/key-sizes-alt.interface';
import { ApiKeySizesAltDto } from '../../../swagger/models/api-key-sizes';

export function adaptApiKeySizesAltDto(source?: KeySizesAlt | null): ApiKeySizesAltDto {
  return {
    MaxSize: source?.maxSize,
    MinSize: source?.minSize,
    SkipSize: source?.skipSize,
  };
}
