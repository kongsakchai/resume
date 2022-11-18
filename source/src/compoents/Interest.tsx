import React from "react"
import { interest } from "../constant/text"
import { interestSize, common } from "../constant/size"
import Dot from "./Dot"
import { VscVerified } from 'react-icons/vsc'

const Interest: React.FC = () => {

    return (
        <div className={`text-primary flex flex-col justify-start items-start ${common.rowSpace}`}>
            <div className="relative font-bold text-topic"><Dot />INTEREST <VscVerified className="text-primary inline-block absolute -right-8 -top-0" size={common.iconSize} /></div>
            <div className={` font-normal text-body text-left flex flex-col ${interestSize.rowSpace}`}>
                {
                    interest.map((v, k) => <div key={k}>{'> '+ v}</div>)
                }
            </div>
        </div>
    )
}

export default Interest
