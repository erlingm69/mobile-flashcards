import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { green, purple, red, white } from '../utils/colors'

function Answer({ answer }) {
    const [show, setShow] = useState(false)

    return (
        <View>
            {
                show ?
                    <Text style={styles.answerText}>{answer}</Text> :
                    <TouchableOpacity
                        style={styles.answerButton}
                        onPress={() => setShow(true)}>
                        <Text style={styles.answerBtnText}>Answer</Text>
                    </TouchableOpacity>
            }
        </View>
    )
}

function Result({ correct, total, onAgain, onBack }) {

    return (
        <View>
            <Text style={styles.titleText}>
                {`You Answered ${(correct / total * 100).toFixed(0)}% correctly`}
            </Text>
            <TouchableOpacity
                style={styles.againButton}
                onPress={onAgain}>
                <Text style={styles.btnText}>Try Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.backButton}
                onPress={onBack}>
                <Text style={styles.btnText}>Back To Deck</Text>
            </TouchableOpacity>
        </View>
    )
}


function Quiz({ deckId, title, questions, answers, navigation, dispatch }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)

    if (currentQuestion < questions.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>{questions[currentQuestion]}</Text>
                <Answer answer={answers[currentQuestion]} />
                <TouchableOpacity
                    style={styles.correctButton}
                    onPress={() => {
                        setCorrect((prev) => (prev + 1))
                        setCurrentQuestion((prev) => (prev + 1))
                    }}>
                    <Text style={styles.btnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.incorrectButton}
                    onPress={() => {
                        setIncorrect((prev) => (prev + 1))
                        setCurrentQuestion((prev) => (prev + 1))
                    }}>
                    <Text style={styles.btnText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return <Result correct={correct} total={correct + incorrect}
        onAgain={
            () => {
                setCurrentQuestion(0)
                setCorrect(0)
                setIncorrect(0)
            }
        }

        onBack={
            () => {
                navigation.goBack()
            }
        }
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, titleText: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"
    },
    answerButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        height: 45,
    },
    correctButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        height: 45,
        backgroundColor: green
    },
    incorrectButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        height: 45,
        backgroundColor: red
    },
    againButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        height: 45,
        backgroundColor: green
    },
    backButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        height: 45,
        backgroundColor: purple
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    answerText: {
        fontSize: 22,
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        textAlign: 'center',
    },
    answerBtnText: {
        color: red,
        fontSize: 22,
        textAlign: 'center',
    }
});

function mapStateToProps(state, { route }) {
    const { deckId } = route.params
    return {
        deckId,
        ...state[deckId]
    }
}

export default connect(mapStateToProps)(Quiz)
