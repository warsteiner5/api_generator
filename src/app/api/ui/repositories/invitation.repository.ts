import { adaptTradeAutoInvitationsInfoToUI } from '../adapters/toUI/trade-auto-invitations-info.adapter';
import { Injectable, inject } from '@angular/core';
import { InvitationApiService } from '../../swagger/services/invitation-api.service';
import { InvitationGetAutoInvitationsInfoParams, invitationGetAutoInvitationsInfoParamsAdapter } from './params/invitation-get-auto-invitations-info.params';
import { InvitationGetOrganizationForInviteParams, invitationGetOrganizationForInviteParamsAdapter } from './params/invitation-get-organization-for-invite.params';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TradeAutoInvitationsInfo } from '../models/trade-auto-invitations-info.interface';

@Injectable({ providedIn: 'root' })
export class InvitationRepository {
  private readonly _api = inject(InvitationApiService);

  invitationGetAutoInvitationsInfo(params: InvitationGetAutoInvitationsInfoParams): Observable<TradeAutoInvitationsInfo> {
    return this._api.invitationGetAutoInvitationsInfo(invitationGetAutoInvitationsInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeAutoInvitationsInfoToUI(res))
    );
  }

  invitationGetOrganizationForInvite(params?: InvitationGetOrganizationForInviteParams): Observable<Blob> {
    return this._api.invitationGetOrganizationForInvite(invitationGetOrganizationForInviteParamsAdapter.adapt(params));
  }

}
