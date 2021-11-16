import { useEffect, useState } from "react"


export const useSelectedSkill = (data: string[], keywords: string[]) => {
  const [ skills, setSkills ] = useState<{ name: string, isSelected?: boolean }[]>([]);

  useEffect(() => {
    setSkills(data?.map(sk => {
      if (keywords?.includes(sk)) {
        return {
          name: sk,
          isSelected: true
        }
      }
      return {
        name: sk
      }
    }))
  }, [keywords, data]);

  return skills;
}