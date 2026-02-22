import { ApiDealCountdownDto } from '../../../swagger/models/api-deal-countdown-dto';
import { DealCountdown } from '../../models/deal-countdown.interface';

export const dealCountdownAdapter = (source?: ApiDealCountdownDto | null): DealCountdown => {
  return {
    countDownDate: source?.CountDownDate,
    isShowTimer: source?.IsShowTimer,
  };
}
