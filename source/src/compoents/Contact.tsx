import React, { useEffect, useState } from "react"
import { MdPhoneIphone, MdOutlineMail, } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { contact } from "../constant/text"
import { contactSize,common } from "../constant/size"
import Dot from "./Dot"

const Contact: React.FC = () => {

    return (
        <React.Fragment>
            <div className={`text-primary flex flex-col justify-start items-start ${common.rowSpace}`}>
                <div className="relative font-bold text-topic "><Dot />CONTACT</div>
                <div className={`flex justify-start items-center ${contactSize.iconSpace}`}>
                    <MdPhoneIphone className="text-primary" size={common.iconSize} />
                    <div className="font-normal text-body ">{contact.tel}</div>
                </div>
                <div className={`flex justify-start items-center ${contactSize.iconSpace}`}>
                    <MdOutlineMail className="text-primary" size={common.iconSize} />
                    <div className="font-normal text-body ">{contact.email}</div>
                </div>
                <div className={`flex justify-start items-center ${contactSize.iconSpace}`}>
                    <BsGithub className="text-primary" size={common.iconSize} />
                    <div className="font-normal text-body ">{contact.github}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact
