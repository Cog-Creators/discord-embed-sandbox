interface Field {
  name?: string,
  value?: string,
  inline?: boolean
}
export interface Embed {
  title: string,
  author: {
    name: string,
    url: string,
    icon:string
  },
  description: string,
  url: string,
  thumb_url: string,
  color: string,
  fields: Field[],
  footer: string
}