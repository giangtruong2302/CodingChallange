import { Button, Space } from 'antd'
import React from 'react'
import 'antd/dist/antd.css';

const Rates = () => {
  return (
    <>
      <Space size={[8, 16]} wrap>
        {new Array(9).fill(null).map(
          (
            _,
            index,
          ) => (
            <Button size="large" className="btn-rate" key={index}>{`${index + 1}0.000.000`}</Button>
          ),
        )}
      </Space>
    </>
  )
}

export default Rates