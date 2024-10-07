import React from "react";

type Props = {
    title: string,
    button_title: string,
    color_title: string,
    button_background: string,
    button_text_color: string,
    navigation: string
}

const navigation = ['#projects', '#about', '#contact']

export default function SelectPage(props: Props) {
    return (
        <div className="flex flex-col items-center">
            <h2 className={`text-gray-300 font-bold p-12 text-center rounded-md px-3 py-2 text-4xl`}>
                {props.title}
            </h2>            
            <button 
                className={`bg-${props.button_background} text-black mt-5 font-medium rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-opacity-80`}>
                <a href={props.navigation}>{props.button_title}</a>
            </button>
        </div>
    );
}
