import { ApiKeySizesAltDto } from '../../../swagger/models/api-key-sizes';
import { KeySizesAlt } from '../../models/key-sizes-alt.interface';

export const keySizesAltAdapter = (source?: ApiKeySizesAltDto | null): KeySizesAlt => {
  return {
    maxSize: source?.MaxSize,
    minSize: source?.MinSize,
    skipSize: source?.SkipSize,
  };
}
