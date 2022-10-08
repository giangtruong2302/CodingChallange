import { Button } from 'antd'
import React from 'react'

const BankInfo = () => {
  return (
    <div className="bank-info-content">
      <div className="bank-info-title">Chi nhanh ngan hang</div>
      <div className="bank-info-description">Ngan hang TMCP Viet Nam thinh vuong (VP Bank) Hoi so</div>
      <div className="tai-khoan-info">
        <div className="tai-khoan-info-content">
          <div className="tai-khoan-title">So tai khoan</div>
          <div className="tai-khoan-content">191415477</div>
        </div>
        <div className="btn-copy-stk"><Button>Copy STK</Button></div>
      </div>
      <div>
        <div>
          <div>Ten tai khoan</div>
          <div>Cong ty co phan Be group</div>
        </div>
      </div>
      <div>
        <div>Noi dung chuyen tien</div>
        <div>{"Covid 19"}</div>
      </div>
    </div>
  )
}

export default BankInfo