// @ts-ignore
export interface Certificate {
  dateFrom: string;
  dateTo: string;
  enable: boolean;
  id: number;
  isCurrent: boolean;
  issuerOrganization: string;
  publicKey: string;
  subject: string;
  thumbprint: string;
}
