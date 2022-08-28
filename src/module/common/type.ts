export interface PaginationResp<T> {
  data: T[];
  message: string;
  totalItem?: number;
  totalItems?: number;
  totalPage: number;
}

export interface ResponseData<T> {
  data: T;
  code?: number;
  message: string;
  id?: string;
}
