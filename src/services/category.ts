import { data } from "@/data";

export function getAllCategories() {
  return data.categories;
}

export function getCategoryById(id: number) {
  return data.categories.find((item) => item.id === id);
}
