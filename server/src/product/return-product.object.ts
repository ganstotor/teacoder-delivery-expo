import { Prisma } from 'generated/prisma'
import { returnCategoryObject } from 'src/category/return-category.object'

export const returnProductObject: Prisma.ProductSelect = {
	id: true,
	name: true,
  description: true,
  image: true,
  price: true,
  createdAt: true,
  slug: true,
    category: {select: returnCategoryObject}
}
