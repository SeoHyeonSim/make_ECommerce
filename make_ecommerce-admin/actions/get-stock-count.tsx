import prismadb from "@/lib/prismadb";

const getStockCount = async (storeId: string) => {
    const stockCount = await prismadb.order.count({
        where: {
            storeId,
            isPaid: true,
        },
    });

    return stockCount
};

export default getStockCount;
