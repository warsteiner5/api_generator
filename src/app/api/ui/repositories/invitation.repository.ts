import { Injectable, inject } from '@angular/core';
import { InvitationApiService } from '../../swagger/services/invitation-api.service';
import { InvitationGetAutoInvitationsInfoParams, invitationGetAutoInvitationsInfoAdapter } from './params/invitation-get-auto-invitations-info.params';
import { InvitationGetOrganizationForInviteParams, invitationGetOrganizationForInviteAdapter } from './params/invitation-get-organization-for-invite.params';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TradeAutoInvitationsInfo } from '../models/trade-auto-invitations-info.interface';
import { tradeAutoInvitationsInfoAdapter } from '../adapters/models/trade-auto-invitations-info.adapter';

@Injectable({ providedIn: 'root' })
export class InvitationRepository {
  private readonly _api = inject(InvitationApiService);

  invitationGetAutoInvitationsInfo(params: InvitationGetAutoInvitationsInfoParams): Observable<TradeAutoInvitationsInfo> {
    return this._api.invitationGetAutoInvitationsInfo(invitationGetAutoInvitationsInfoAdapter(params)).pipe(
      map((res) => tradeAutoInvitationsInfoAdapter(res))
    );
  }

  invitationGetOrganizationForInvite(params?: InvitationGetOrganizationForInviteParams): Observable<Blob> {
    return this._api.invitationGetOrganizationForInvite(invitationGetOrganizationForInviteAdapter(params));
  }

}
