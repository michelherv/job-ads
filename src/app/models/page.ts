export interface Page<T> {
  items: T[];
  offset: number;
  length: number;
  total: number;
}
