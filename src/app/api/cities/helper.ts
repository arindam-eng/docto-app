export const getCitiesQuery = (url: string) => {
    const cityurl = new URL(url);
    const searchParams: Record<string, any> = new URLSearchParams(
        cityurl.search
    );
    let query: any = {};
    if (searchParams.city) {
        query = {
            ...query,
            name: { $regex: `/${searchParams.city}/i` },
        };
    }
    return query;
};
