import { adaptMessengerStatusAltToUI } from '../adapters/toUI/messenger-status-alt.adapter';
import { adaptTelegramUrlAltToUI } from '../adapters/toUI/telegram-url-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessengerApiService } from '../../swagger/services/messenger-api.service';
import { MessengerConnectTelegramParams, messengerConnectTelegramParamsAdapter } from './params/messenger-connect-telegram.params';
import { MessengerGetMessengerStatusParams, messengerGetMessengerStatusParamsAdapter } from './params/messenger-get-messenger-status.params';
import { MessengerSendOneApplicationsEventParams, messengerSendOneApplicationsEventParamsAdapter } from './params/messenger-send-one-applications-event.params';
import { MessengerSendTradeWithApplicationsEndsEventParams, messengerSendTradeWithApplicationsEndsEventParamsAdapter } from './params/messenger-send-trade-with-applications-ends-event.params';
import { MessengerSendTradeWithoutApplicationsEndsEventParams, messengerSendTradeWithoutApplicationsEndsEventParamsAdapter } from './params/messenger-send-trade-without-applications-ends-event.params';
import { MessengerStatusAlt } from '../models/messenger-status-alt.interface';
import { Observable } from 'rxjs';
import { TelegramUrlAlt } from '../models/telegram-url-alt.interface';

@Injectable({ providedIn: 'root' })
export class MessengerRepository {
  private readonly _api = inject(MessengerApiService);

  messengerConnectTelegram(params?: MessengerConnectTelegramParams): Observable<TelegramUrlAlt> {
    return this._api.messengerConnectTelegram(messengerConnectTelegramParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTelegramUrlAltToUI(res?.data))
    );
  }

  messengerGetMessengerStatus(params?: MessengerGetMessengerStatusParams): Observable<MessengerStatusAlt> {
    return this._api.messengerGetMessengerStatus(messengerGetMessengerStatusParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMessengerStatusAltToUI(res?.data))
    );
  }

  messengerSendOneApplicationsEvent(params?: MessengerSendOneApplicationsEventParams): Observable<void> {
    return this._api.messengerSendOneApplicationsEvent(messengerSendOneApplicationsEventParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  messengerSendTradeWithApplicationsEndsEvent(params?: MessengerSendTradeWithApplicationsEndsEventParams): Observable<void> {
    return this._api.messengerSendTradeWithApplicationsEndsEvent(messengerSendTradeWithApplicationsEndsEventParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  messengerSendTradeWithoutApplicationsEndsEvent(params?: MessengerSendTradeWithoutApplicationsEndsEventParams): Observable<void> {
    return this._api.messengerSendTradeWithoutApplicationsEndsEvent(messengerSendTradeWithoutApplicationsEndsEventParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
