import React, { useState, useEffect } from 'react'
import { CopyButton, Button, Text, ThemeIcon } from '@mantine/core'
import { showNotification } from "@mantine/notifications"
import { IconCheck } from '@tabler/icons'
import axios from "axios"
const BankInfo = () => {
  const [accountNumber, setAccountNumber] = useState("23022000")
  const [bankInfo, setBankInfo] = useState()

  const callAPI = async () => {
    try {
      await axios.get('https://be-homework.vercel.app/api/bank').then((res) => { console.log("first") })
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
  }, [])
  return (
    <div className="flex flex-col bg-white gap-3 pt-5 pl-3 pr-5 pb-3">
      <div className=" text-slate-300 text-sm">Chi nhánh ngân hàng</div>
      <div className="text-sm">Ngân hàng TMCP Việt Nam thịnh vượng (VP Bank) Hội sở</div>
      <div className="flex flex-row justify-between">
        <div>
          <div className="tai-khoan-title">Số tài khoản</div>
          <div className="tai-khoan-content">{accountNumber}</div>
        </div>
        <div className="btn-copy-stk">
          <CopyButton value={accountNumber}>
            {({ copied, copy }) => (
              <Button
                onClick={() => {
                  showNotification({
                    icon: <IconCheck size={16} />,
                    message: 'Đã copy số tài khoản',
                    styles: (theme) => ({
                      root: {
                        backgroundColor: theme.colors.green[2],
                        borderColor: theme.colors.green[2],

                        '&::before': { backgroundColor: theme.white },
                      },

                      title: { color: theme.white },
                      description: { color: theme.black },
                      closeButton: {
                        color: theme.white,
                        '&:hover': { backgroundColor: theme.colors.green[7] },
                      },
                    }),
                  });
                  copy();
                  callAPI()
                }
                }
              ><Text color="black" >{copied ? <><IconCheck />{"Copied STK"}</> : 'Copy STK'}</Text></Button>
            )}
          </CopyButton>
        </div>
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