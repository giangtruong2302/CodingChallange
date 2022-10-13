import { Space } from 'antd'
import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Button } from '@mantine/core'

const Rates = (props) => {
  const rates = [
    {
      id: 1,
      rate: "100.000",
      value: 100000
    },
    {
      id: 2,
      rate: "200.000",
      value: 200000
    },
    {
      id: 3,
      rate: "300.000",
      value: 300000
    },
    {
      id: 1,
      rate: "500.000",
      value: 500000
    },
    {
      id: 1,
      rate: "800.000",
      value: 800000
    },
    {
      id: 1,
      rate: "1.000.000",
      value: 1000000
    },
  ]
  return (
    <>
      <Space size={[9, 8]} wrap>
        {rates.map(
          (
            item,
            index,
          ) => (
            <Button radius={"xs"} size="sm" variant='outline' className=" min-w-max w-28 bg-white text-black border-transparent border-2 border-solid focus:border-sky-600  hover:border-sky-600" key={index} onClick={() => props.getValueDonate(item.value)}><p className=" align-middle text-center pt-3 text-xs font-normal">{item.rate}₫</p></Button>
          ),
        )}
      </Space>
    </>
  )
}

export default Rates