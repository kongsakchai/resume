import React, { useEffect, useState } from "react"
import { MdPhoneIphone, MdOutlineMail, } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { ExperienceProps, exp } from "../constant/text"
import { common, expSize } from "../constant/size"
import { AiOutlineFolder } from "react-icons/ai"
import Dot from "./Dot"

const Experience: React.FC = () => {

    return (
        <React.Fragment>
            <div className={`text-primary flex flex-col justify-start items-start ${common.rowSpace}`}>
                <div className="relative font-bold text-topic "><Dot />EXPERIENCE & PROJECTS <AiOutlineFolder className="text-primary inline-block absolute -right-8 top-0" size={common.iconSize}/></div>
                <div className={`flex flex-col ${expSize.rowSpace}`}>
                    {
                        exp.map((v, i) => <Content key={i} data={v} />)
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Experience

interface Props {
    data: ExperienceProps
}


const Content: React.FC<Props> = ({ data }) => {
    return (
        <div className={`text-primary text-body flex flex-col`}>
            <div className=" font-semibold text-left">{data.topic}</div>
            {
                data.description.map((v, i) => <div key={i} className=" font-normal text-left">{"> " + v}</div>)
            }
            <div className={`flex flex-row flex-wrap text-left`}>
                {data.tag.join(' / ')}
            </div>
        </div>
    )
}