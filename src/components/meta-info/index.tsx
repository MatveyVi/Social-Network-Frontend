import React from 'react'
import { IconType } from 'react-icons';

type Props = {
  count: number;
  Icon: IconType
}

export const MetaInfo: React.FC<Props> = ({
  count,
  Icon
}) => {
  return (
    <div className='flex items-center gap-2 cursor-pointer'>
      {
        count > 0 && (
          <p className="font-semibold "></p>
        )
      }
    </div>
  )
}
