export interface UploadthingFiles {
    files: File[]
    hasMore: boolean
  }
  
  export interface File {
    id: string
    key: string
    name: string
    customId: any
    status: string
  }