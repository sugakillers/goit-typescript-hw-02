export interface IAppState {
    currentPage: number;
    totalPages?: number;
  }
  
  export interface IImage {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string | null;
    likes: number;
  }
  
  export interface ISelectImg {
    urls: {
      regular: string;
    };
    alt_description: string;
    likes: number;
  }
  
  export interface IApiResponse {
    total_pages: number;
    results: IImage[];
  }