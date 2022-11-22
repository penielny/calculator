import { useState, useEffect, createContext, useContext } from 'react'
import { useAppState } from './appStore';
import { Audio } from 'expo-av';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const opprends = [{ text: "+", value: "+" }, { text: "-", value: "-" }, { text: "×", value: "*" }, { text: "÷", value: "/" }];

export function GameContextProvider({ children }) {

    const { isGameStarted, setIsGameStarted } = useAppState()
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState([])
    const [answerText, setAnswerText] = useState("")
    const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0)
    const [emojiState, setEmojiState] = useState(0)
    const [timer, setTimer] = useState(100)
    const [lives, setLives] = useState(3)





    // play sound
    async function playSound() {
        // const { sound } = await Audio.Sound.createAsync( require('./assets/Hello.mp3')
    }

    // stop sound

    function stopSound() { }



    function checkAnswer() {

        let isCorrect = false;

        let correctEval = eval(`${questions[currentQuestionPosition][0]} ${questions[currentQuestionPosition][1].value} ${questions[currentQuestionPosition][2]}`);
        if (correctEval.toString() !== eval(answerText)?.toString()) {
            // TODO: playsound when wrong
            setEmojiState(-1)
            if (lives > 0) {
                setLives(prev => prev - 1)
                if (currentQuestionPosition < questions.length - 1) {
                    setCurrentQuestionPosition(prev => prev + 1)
                }
            }
            isCorrect = false;
        } else {
            // TODO: play sound when correct
            setEmojiState(1)
            setScore(prev => prev + 1)
            if (currentQuestionPosition < questions.length - 1) {
                setCurrentQuestionPosition(prev => prev + 1)
            }
            isCorrect = true;
        }
        if (lives == 0) {
            setScore(0)
        }
        setTimer(100)
        setAnswer([])
        setAnswerText("")
        return isCorrect;
    }



    useEffect(() => {
        setTimeout(() => {
            setEmojiState(0);
        }, 1000);

    }, [emojiState])


    function genQuiz() {
        // TODO:
        // [[0],....[9]]
        // [x,y,z]
        // x,z:int
        // y = obg:opprends
        // getting 10 quizze problems
        let qs = []
        for (let i = 0; i < 10; i++) {
            qs.push([`${Math.floor(Math.random() * 9)}`, opprends[Math.floor(Math.random() * 3)], `${Math.floor(Math.random() * 9)}`])
        }
        setQuestions(prev => [...prev, ...qs]);
    }

    // checking if gameshould stop based on life
    useEffect(() => {
        if (lives == 0) {
            // stop game
            setIsGameStarted(false)
        }
    }, [lives])

    // generatig more numbers
    useEffect(() => {
        if (currentQuestionPosition == questions.length / 2) {
            genQuiz()
        }
    }, [currentQuestionPosition])

    // genrating first 10 questions on start
    useEffect(() => {
        let qs = []
        for (let i = 0; i < 10; i++) {
            qs.push([`${Math.floor(Math.random() * 9)}`, opprends[Math.floor(Math.random() * 4)], `${Math.floor(Math.random() * 9)}`])
        }
        setQuestions(qs);
        setCurrentQuestionPosition(0)
        setLives(3)
    }, [isGameStarted])

    useEffect(() => {
        // TODO:
        // First check for special keys pressed
        //   check if answer is correct or wrong
        let ansText = "";
        answer.forEach(ans => {
            if (["BACK_SPACE", "="].includes(ans.value)) {
                if (ans.value == "BACK_SPACE") {
                    // TODO:
                    // clear the last element in the answer array and return
                    setAnswer(answer.slice(0, answer.length - 2))
                    return
                }

                if (ans.value == "=") {
                    // FIXME: Optimize these logic not working properly
                    checkAnswer() /* Done */
                    return
                }
            }
            ansText += ans.text;
        });
        setAnswerText(ansText);

    }, [answer])

    return <GameContext.Provider value={{ questions, genQuiz, answerText, answer, timer, setTimer, setAnswer, currentQuestionPosition, lives, score, setScore, emojiState, checkAnswer }}>{children}</GameContext.Provider>
}
