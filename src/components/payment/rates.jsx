import { Space } from 'antd'
import React from 'react'
import 'antd/dist/antd.css';
import { Button } from '@mantine/core'

const Rates = () => {
  const rates = [
    {
      id: 1,
      rate: "100.000đ",
      value: 100000
    },
    {
      id: 2,
      rate: "200.000đ",
      value: 200000
    },
    {
      id: 3,
      rate: "300.000đ",
      value: 300000
    },
    {
      id: 1,
      rate: "500.000đ",
      value: 500000
    },
    {
      id: 1,
      rate: "800.000đ",
      value: 800000
    },
    {
      id: 1,
      rate: "1.000.000đ",
      value: 1000000
    },
  ]
  return (
    <>
      <Space size={[6, 16]} wrap>
        {rates.map(
          (
            item,
            index,
          ) => (
            <Button size="md" variant='outline' className="bg-white text-black border-transparent border-2 border-solid hover:border-sky-600" key={index}>{item.rate}</Button>
          ),
        )}
      </Space>
    </>
  )
}

export default Rates