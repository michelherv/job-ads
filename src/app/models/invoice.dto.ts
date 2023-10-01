import { Invoice } from '@jobcloud/admin/models/invoice';

export interface InvoiceDto extends Invoice {
  // DTO properties that are not part of the model
  createdAt: Date;
  updatedAt: Date;
  _embedded: unknown;
}
