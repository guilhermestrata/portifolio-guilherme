import React from "react";

type Props = {
    title: String,
}

export default function SectionTitle(props: Props){

    return(
        <div className="flex space-x-4">
            <hr className="flex-grow border-t border-gray-700"/>
            <h1 className={'text-black font-bold p-12 text-center w-full rounded-md px-3 py-2 text-4xl'}>{props.title}</h1>
            <hr className="flex-grow border-t border-gray-700" /> 
        </div>
    );
}