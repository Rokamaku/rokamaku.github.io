import React from 'react'

export interface InterestData {

}

export interface InterestProps {
  data: InterestData
}

export const Interest: React.FunctionComponent<InterestProps> = (props) => {
  const { data } = props;
  return (
    <div>
      {data}
    </div>
  )
}