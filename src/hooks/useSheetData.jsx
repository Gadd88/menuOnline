import useFetchPapaParse from "./useFetchPapaParse"

export const useSheetData = () => {

    const [hamburguesas] = useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=0&single=true&output=csv')
    const [pizzas] = useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=1646481994&single=true&output=csv')
    const [bebidas] = useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=1013302729&single=true&output=csv')
    const [promos] = useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=1019093214&single=true&output=csv')

    return [hamburguesas, pizzas, bebidas, promos]
}
