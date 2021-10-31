import React, { } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import AnimatedNumber from 'animated-number-react'



export default function CardGlobal(props) {
    const { CovidData, bgColor, bgColor2, textColor, baseText } = props;
    const state = {
        value: CovidData,
        duration: 4800 
    };
    const formatValue = (value) => value.toFixed(0);


    return (
        <div>
            <Card className="sm:mt-4 cursor-default">
                <div className="hover:translate-x-5">
                    <Card.Header className={`${bgColor}`}>
                        <img src="https://media2.giphy.com/media/wvP4x67EnIhWiCztAf/giphy.gif"
                            alt="" className="w-20 h-10" />
                        <h1 className={`text-3xl text-center pb-8 ${textColor}`}>
                            <div>
                                <AnimatedNumber
                                    value={state.value}
                                    formatValue={formatValue}
                                    duration={state.duration}

                                />
                            </div>
                        </h1>
                    </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item className={`${bgColor2} ${textColor} 
                         text-center h-full text-xl `}>{baseText}</ListGroup.Item>
                    </ListGroup>
                </div>
            </Card>
        </div>
    )
}
