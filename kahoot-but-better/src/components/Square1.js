import React, {useState} from "react";
import "./css/Square1.css"
import AnswerHelper from "./Helper/AnswerHelper";

export default function Square1(){
    const square1 = ('♠︎')
    const answer1 = AnswerHelper.combination[0]
    // console.log(data);
    console.log(AnswerHelper.combination[0])

    return(
        <div className='square1'>
            {square1}
            <div>
                {answer1}
            </div>
        </div>
    )
}