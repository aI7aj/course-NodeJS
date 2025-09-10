export const getPaginiation = (req) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    return { page, limit, offset };
};

export const getPaginiationData = (data, page) => {
    const { count: totalItems, rows: results } = data;
    const totalPages = Math.ceil(totalItems / (data.limit || 5));
    return {
        pagination: {
            totalItems,
            totalPages,
            currentPage: page,
            limit
        },
        results,
    }
};
