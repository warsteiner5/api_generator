import { NicRegistryParticipantInfo } from './nic-registry-participant-info.interface';

// @ts-ignore
export interface NicRegistryEntry {
  contractDate: string;
  contractNumber: string;
  createDate: string;
  customerInn: string;
  customerKpp: string;
  customerName: string;
  id: number;
  participantEmail: string;
  participantId: number;
  participantInn: string;
  participantKpp: string;
  participantName: string;
  reasonForAdding: string;
  responsibleEmail: string;
  responsibleFullName: string;
  responsiblePhoneNumber: string;
  tenantName: string;
  tradeId: number;
  tradeName: string;
  winners: NicRegistryParticipantInfo[];
}
