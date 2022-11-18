import React, { useEffect, useState } from "react"
import { MdPhoneIphone, MdOutlineMail, } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { CompetitionProps, competition } from "../constant/text"
import { common, comSize } from "../constant/size"
import { AiOutlineTrophy } from "react-icons/ai"
import Dot from "./Dot"

const Competition: React.FC = () => {

    return (
        <React.Fragment>
            <div className={`text-primary flex flex-col justify-start items-start ${common.rowSpace}`}>
                <div className="relative font-bold text-topic "><Dot />AWARDS & COMPETITION <AiOutlineTrophy className="text-primary inline-block absolute -right-8 top-0" size={common.iconSize}/></div>
                <div className={`flex flex-col ${comSize.rowSpace}`}>
                    {
                        competition.map((v, i) => <Content key={i} data={v} />)
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Competition

interface Props {
    data: CompetitionProps
}


const Content: React.FC<Props> = ({ data }) => {
    return (
        <div className={`text-primary text-body flex flex-col`}>
            <div className=" font-semibold text-left">{data.topic}</div>
            {
                data.description.map((v, i) => <div key={i} className=" font-normal text-left">{"> " + v}</div>)
            }
        </div>
    )
}