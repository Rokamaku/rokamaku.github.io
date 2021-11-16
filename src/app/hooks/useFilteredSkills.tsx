import { useEffect, useState } from "react";

interface DataHaveSkills {
  keywords?: string[];
};

export const useFilteredSkills = (data: DataHaveSkills[], keywords: string[]) => {

  const [filteredData, setFilteredData] = useState<unknown[]>([]);

  useEffect(() => {
    if (keywords?.length) {
      setFilteredData(data.filter(w => w.keywords?.some(kw => keywords?.some((globalKeyWork => kw.toLowerCase() === globalKeyWork.toLowerCase())))).map(d => {
        return {
          ...d,
          keywords: d.keywords?.map(kw => {
            if (keywords.some(globalKw => globalKw.toLowerCase() === kw.toLowerCase())) {
              return {
                name: kw,
                isSelected: true
              }
            }
            return {
              name: kw
            }
          })
        }
      }))
    } else {
      setFilteredData(data.map(d => ({
        ...d,
        keywords: d.keywords?.map(kw => ({
          name: kw
        }))
      })));
    }
  }, [keywords, data])

  return filteredData;
}