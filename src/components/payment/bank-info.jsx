import React, { useState, useEffect } from 'react'
import { CopyButton, Button, Text, ThemeIcon } from '@mantine/core'
import { showNotification } from "@mantine/notifications"
import { IconCheck } from '@tabler/icons'
import axios from "axios"
import fetch from "isomorphic-unfetch";

const BankInfo = () => {
  const [accountNumber, setAccountNumber] = useState("23022000")
  const [bankInfo, setBankInfo] = useState()

  const callAPI = async () => {
    try {

      await axios.get('https://be-homework.vercel.app/api/bank', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          mode: 'no-cors',
        }
      }).then((res) => { alert("success") }).catch(() => {
        alert("error")
      })

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
  }, [])
  return (
    <div className="flex flex-col bg-white gap-3 pt-5 pl-3 pr-5">
      <div className=" text-slate-400 text-sm">Chi nhánh ngân hàng</div>
      <div className="text-sm">Ngân hàng TMCP Việt Nam thịnh vượng (VP Bank) Hội sở</div>
      <div className="flex flex-row justify-between">
        <div>
          <div className=" text-slate-400 text-sm">Số tài khoản</div>
          <div className="tai-khoan-content">{accountNumber}</div>
        </div>
        <div >
          <CopyButton value={accountNumber}>
            {({ copied, copy }) => (
              <Button
                className=' bg-gray-200 hover:bg-green-300'
                onClick={async () => {
                  showNotification({
                    icon: <IconCheck size={16} />,
                    message: 'Đã copy số tài khoản',
                    color: "green",
                    styles: (theme) => ({
                      closeButton: {
                        color: theme.black
                      },
                      root: {
                        backgroundColor: theme.colors.green[2],
                        borderColor: theme.colors.green[2],

                        '&::before': { backgroundColor: theme.white },
                      },

                      title: { color: theme.white },
                      description: { color: theme.black },
                      closeButton: {
                        color: theme.black,
                        '&:hover': { backgroundColor: theme.colors.green[6] },
                      },
                    }),
                  });
                  copy();
                  // callAPI();
                }
                }
              ><Text color="black" >{copied ? <div className="flex flex-row"><IconCheck />{"Copied STK"}</div> : 'Copy STK'}</Text></Button>
            )}
          </CopyButton>
        </div>
      </div>
      <div>
        <div>
          <div className=" text-slate-400 text-sm">Tên tài khoản</div>
          <div>Công ty cổ phần Be group</div>
        </div>
      </div>
      <div>
        <div className=" text-slate-400 text-sm">Nội dung chuyển tiền</div>
        <div>{"Covid 19"}</div>
      </div>
    </div>
  )
}

export default BankInfo