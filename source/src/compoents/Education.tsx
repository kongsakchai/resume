import React, { useEffect, useState, useMemo } from "react"
import { education } from "../constant/text"
import { common } from "../constant/size"
import Dot from "./Dot"
import { MdOutlineSchool } from "react-icons/md"

const Education: React.FC = () => {

    const data = useMemo(() => {
        return education.map((v) => [v.degree, v.year, v.at, v.description]);
    }, [education])

    return (
        <React.Fragment>
            <div className={`flex flex-col justify-start items-start ${common.rowSpace}`}>
                <div className="relative font-bold text-topic text-primary"><Dot /> EDUCATION <MdOutlineSchool className="text-primary inline-block absolute -right-8 top-0" size={common.iconSize} /></div>
                <Content data={data} />
            </div>
        </React.Fragment>
    )
}

export default Education

interface Promps {
    data: string[][]
}

const Content: React.FC<Promps> = (props) => {

    return (
        <React.Fragment>
            <div className={`text-primary flex flex-col justify-start items-start`}>
                {
                    props.data.map((data, i) =>
                        <React.Fragment key={i}>
                            <div className={`col-span-1 flex flex-row justify-start items-center gap-2`}>
                                <div className={`flex flex-col justify-start items-start`}>
                                    <div className=" font-semibold text-body mr-1">{data[0]}</div>
                                    <div className=" font-semibold text-body">{data[1]}</div>
                                </div>
                                <div className={`bg-primary w-[1px] h-[30px]`}></div>
                                <div className=" font-nromal text-body text-left text-clip w-[180px]">{data[2]}</div>
                            </div>
                            <div className={`col-span-2 font-normal text-body text-left`}>{data[3]}</div>
                            <div className={`col-span-2 font-normal text-body text-left ${i != props.data.length - 1 && 'mb-3'}`}>
                                <div className={`bg-second w-[100px] h-[1px]`}></div>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        </React.Fragment>
    )
}
