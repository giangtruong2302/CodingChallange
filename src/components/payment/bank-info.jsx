import React from 'react'
import { Button, Text } from '@mantine/core'

const BankInfo = () => {
  return (
    <div className="bank-info-content">
      <div className="bank-info-title">Chi nhánh ngân hàng</div>
      <div className="bank-info-description">Ngân hàng TMCP Việt Nam thịnh vượng (VP Bank) Hội sở</div>
      <div className="tai-khoan-info">
        <div className="tai-khoan-info-content">
          <div className="tai-khoan-title">Số tài khoản</div>
          <div className="tai-khoan-content">191415477</div>
        </div>
        <div className="btn-copy-stk"><Button color={"gray"} className="btn-copy-stk"><Text color="black" >Copy STK</Text></Button></div>
      </div>
      <div>
        <div>
          <div>Tên tài khoản</div>
          <div>Công ty cổ phần Be group</div>
        </div>
      </div>
      <div>
        <div>Nội dung chuyển tiền</div>
        <div>{"Covid 19"}</div>
      </div>
    </div>
  )
}

export default BankInfo