import { useMemo } from "react";

export const usePaginate = <T>(items: T[], page: number, perPage: number): T[] => {
    const result = useMemo(() => {
        return items.slice((page - 1) * perPage, page * perPage);
    }, [items, page, perPage]);

    return result;
}