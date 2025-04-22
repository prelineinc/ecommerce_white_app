
export type AllowedSCIRoles = 'sci_user' | 'sci_admin' | 'csr_admin';

export enum APIHttpStatus {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  Cancel = 499,
}
export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
}

export enum StopType {
  P = 'P',
  D = 'D',
  PD = 'PD',
}
