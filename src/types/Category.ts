export interface Category {
  name: string,
  subcategories: Subcategory[],
  index?: number
}

export interface Subcategory {
  name: string,
  link: string,
}
