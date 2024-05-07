import 'bootstrap/dist/css/bootstrap.min.css';
import { Answer, Question } from "./QAModels.mjs";
import NavHeader from "./components/NavHeader";
import { Container } from 'react-bootstrap';
import QuestionDescription from './components/QuestionDescription';
import Answers from './components/AnswerComponents';
import { useState } from 'react';

const fakeQuestion = new Question(1, 'Is JavaScript better than Python?', 'luigi.derussis@polito.it', '2024-02-07');
fakeQuestion.init();
const fakeAnswers = fakeQuestion.getAnswers();
// nuovo stato ==> nuovo rerendering
// - risposte: dove lo metto?
// --> diverse opzioni: App, AnswerComponents(Answers, AnswerTable)
// --- App: 
// --- Answers: in questo momento è la scelta più giusta ma per i prossimi step (ci sono più 'Question') va in App (l'unica controindicazione è nell'inizializzazione dello stato)
// --- AnswerTable:
// - domande
function App() {
  const [question, setQuestion] = useState(fakeQuestion); 
  const [answers, setAnswers] = useState(fakeAnswers);

  const voteUp = (answerId) => { 
    //
    setAnswers(oldAnswers => {
      return oldAnswers.map(ans => { // costruisco un nuovo oggetto 
        if(ans.id === answerId)
          // ritorno una nuova, aggiornata, risposta
          return new Answer(ans.id, ans.text, ans.email, ans.date, ans.score +1); //creo un nuovo oggetto perché non posso manipolare l'array dello stato
        else
          return ans;
      });
    });
  }

  return (
    <>
      <NavHeader questionNum={question.id} />
      <Container fluid className='mt-3'>
        <QuestionDescription question={question} />
        <Answers answers={answers} voteUp={voteUp}></Answers>
      </Container>
    </>
  )

}

export default App;
