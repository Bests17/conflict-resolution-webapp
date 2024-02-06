export interface RecordType {
  id: string
  first_name: string
  last_name: string
  address: string
  age: string | number
  phone?: string
  birthday?: string
  gender?: string
  class?: string
  source: string
  status?: string
  records?: RecordType[]
}
