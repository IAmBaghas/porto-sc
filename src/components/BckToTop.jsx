import React from 'react'
import { FloatButton } from 'antd';

export const BckToTop = () => {
  return (
    <div className='absolute'>
        <div
        style={{
        padding: 10,
        }}
    >
        <FloatButton.BackTop />
    </div>
  </div>
  )
}
