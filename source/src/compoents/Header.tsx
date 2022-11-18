import React from "react"

interface Props {
    url?: string
}

const Header: React.FC<Props> = ({ url }) => {

    return (
        <React.Fragment>
            <div className='bg-main w-full h-[4cm] relative flex flex-row justify-end items-end gap-7 p-7'>
                <div className="bg-green-500 w-[4.5cm] h-[4.5cm] absolute -bottom-[2cm] left-[1cm] rounded-full overflow-hidden">
                    <img
                        src={(url && url != "") ? url : "https://media.discordapp.net/attachments/953024470753374268/1031850426741571634/1666082702097.jpg"}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className='h-full flex flex-col justify-end items-start gap-5'>
                    <div className="font-bold  text-head text-left ">SAKCHAI PAOIN</div>
                    <div className="font-normal text-head-second text-left ">3rd-Year King Mongkut’s University of Technology Thonburi</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
