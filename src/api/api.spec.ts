import { AxiosResponse } from 'axios'

export interface RequestBodyType {
  [key: string]: string | number | null
}

export interface RequestMethodType {
  ({
     params,
     body,
     id
   }: {
    params?: string,
    body?: RequestBodyType,
    id?: number | string
  }): Promise<AxiosResponse>
}

export interface PaginationDataType {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  // pageable: {
  //   offset: number,
  //   pageNumber: number,
  //   pageSize: number,
  //   pages: boolean,
  //   unpaged: boolean,
  // };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
}