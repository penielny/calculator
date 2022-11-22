import React, { useState, useContext, createContext, useEffect } from 'react'

const APP_CONTEXT = createContext();


export const useAppState = () => useContext(APP_CONTEXT);


export function AppStateProvider({ children }) {
    
    const [expressionToCal, setExpressionToCal] = useState([])
    const [answer, setAnswer] = useState("")
    const [isDark, setIsDark] = useState( false )

    const [opengame, setOpengame] = useState(false)
    const [isGameStarted, setIsGameStarted] = useState(false)

    useEffect(() => {
        expressionToCal.map((data, index) => {
            if (expressionToCal[expressionToCal.length - 1].text == "=") {
                setExpressionToCal(expressionToCal.slice(0, expressionToCal.length - 1))
            }
            if (["AC", "+/-", "=", "C"].includes(data.text)) {
                switch (data.text) {
                    case "AC":
                        setExpressionToCal([])
                        setAnswer("")
                        break;
                    case "C":
                        setExpressionToCal(expressionToCal.slice(0, expressionToCal.length - 2))
                        break;
                    case "=":
                        equalTo()
                        break;
                    default:
                        break;
                }

            }
        })

    }, [expressionToCal])


    function equalTo() {
        let eqString = "";
        expressionToCal.map((data, index) => eqString = eqString + data.value)
        let newEvalString = eqString.replace("=", "");
        try {
            setAnswer(eval(newEvalString))
        } catch (error) {
            setAnswer("N/A")
        }
    }


    return (
        <APP_CONTEXT.Provider value={{ expressionToCal, setExpressionToCal, answer, isDark, setIsDark, opengame, setOpengame, isGameStarted, setIsGameStarted }}>
            {children}
        </APP_CONTEXT.Provider>
    )
}
