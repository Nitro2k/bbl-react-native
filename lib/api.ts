import type { Product } from "@/types/product";

const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
  return response.json();
}

export async function fetchProductById(id: number): Promise<Product> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}: ${response.status}`);
  }
  const text = await response.text();
  if (!text) {
    throw new Error(`Product ${id} not found`);
  }
  return JSON.parse(text);
}
