/* eslint-disable @typescript-eslint/naming-convention */

export interface BookingEntity {
  court_id: number;
  client_id: number;
  booking_number: string;
  booking_time: string;
  status: string;
  hour: number;
}

