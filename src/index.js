import store from './store';
import { fetchQuizzes } from './actions/quizActionCreator';

store.subscribe(() => {
  console.log('Stateの状態');
  console.log(store.getState());
  console.log('====================');
});

store.dispatch( fetchQuizzes() );

