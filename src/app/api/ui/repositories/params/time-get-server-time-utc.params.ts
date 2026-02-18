import { TimeGetServerTimeUtc$Params } from '../../../swagger/fn/time/time-get-server-time-utc';

export interface TimeGetServerTimeUtcParams {
}

export const timeGetServerTimeUtcParamsAdapter = {
  adapt(params?: TimeGetServerTimeUtcParams): TimeGetServerTimeUtc$Params {
    if (!params) {
      return {} as TimeGetServerTimeUtc$Params;
    }
    return {
    };
  }
};
