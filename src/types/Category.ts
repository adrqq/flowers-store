export interface Category {
  name: string,
  subcategories: Subcategory[],
}

interface Subcategory {
  name: string,
  link: string,
}
