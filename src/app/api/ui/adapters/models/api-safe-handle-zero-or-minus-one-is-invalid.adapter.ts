import { SafeHandleZeroOrMinusOneIsInvalidAlt } from '../../models/safe-handle-zero-or-minus-one-is-invalid-alt.interface';
import { ApiSafeHandleZeroOrMinusOneIsInvalidAltDto } from '../../../swagger/models/api-safe-handle-zero-or-minus-one-is-invalid';
import { apiSafeHandleAltDtoAdapter } from './api-safe-handle.adapter';

export const apiSafeHandleZeroOrMinusOneIsInvalidAltDtoAdapter = (source?: SafeHandleZeroOrMinusOneIsInvalidAlt | null): ApiSafeHandleZeroOrMinusOneIsInvalidAltDto => {
  return {
    ...apiSafeHandleAltDtoAdapter(source as unknown as Parameters<typeof apiSafeHandleAltDtoAdapter>[0]),
    IsInvalid: source?.isInvalid,
  };
}
