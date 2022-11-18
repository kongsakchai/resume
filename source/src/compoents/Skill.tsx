import React, { useEffect, useState } from "react"
import { MdPhoneIphone, MdOutlineMail, } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { skill } from "../constant/text"
import { skillSize, common } from "../constant/size"
import Dot from "./Dot"
import { MdLightbulbOutline } from 'react-icons/md'

const Skill: React.FC = () => {

    return (
        <div className={`text-primary flex flex-col justify-start items-start ${common.rowSpace}`}>
            <div className="relative font-bold text-topic"><Dot />SKILL <MdLightbulbOutline className="text-primary inline-block absolute -right-8 -top-1" size={common.iconSize} /></div>
            <div className={` font-normal text-body flex flex-col ${skillSize.rowSpace}`}>
                {
                    skill.map((v, k) =>
                        <React.Fragment key={k}>
                            <div className={`w-[300px] flex flex-row flex-wrap justify-start items-start ${skillSize.colSpace}`}>
                                {
                                    v.map((row, k) => <div key={k}>{row}</div>)
                                }
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    )
}

export default Skill
