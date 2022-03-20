import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    products: async (_, obj) => {
      const products = await prisma.product.findMany({});
      return products;
    },
    product: async (_, obj) => {
      const { id } = obj;
      const product = await prisma.product.findUnique({
        where: {
          id: Number(id)
        }
      });
      return product;
    }
  },
  Mutation: {
    createProduct: async (_, data) => {
      console.log(data);
      const product = await prisma.product.create({
        data: data
      });
      return product;
    },
    updateProduct: async (_, data) => {
      const { id } = data;
      const product = await prisma.product.update({
        where: {
          id: Number(id)
        },
        data: {
          name: data.name,
          price: data.price,
          categoryId: data.categoryId
        },
        include: { category: true }
      });
      return product;
    },
    deleteProduct: async (_, data) => {
      const { id } = data;
      const deletedProduct = await prisma.product.delete({
        where: {
          id: Number(id)
        }
      });
      return deletedProduct;
    }
  }
};
export default resolvers;