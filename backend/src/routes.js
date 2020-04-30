// rotas que o frontend vai acessar a partir de diferentes metodos
import { Router } from 'express';

import ThemeController from './app/controller/ThemeController';
import QuestionController from './app/controller/QuestionController';
import CorrectAnwserController from './app/controller/CorrectAnwserController';

const routes = new Router();

routes.post('/themes', ThemeController.store);
routes.get('/themes', ThemeController.index);
routes.delete('/themes/:id', ThemeController.delete);
routes.get('/themes/:id', ThemeController.show);
routes.put('/themes/:id', ThemeController.update);

routes.get('/questions', QuestionController.index);
routes.post('/questions', QuestionController.store);
routes.get('/questions/:id', QuestionController.show);
routes.delete('/questions/:id', QuestionController.delete);
routes.put('/questions/:id', QuestionController.update);

routes.post('/correct_anwser', CorrectAnwserController.store);
routes.get('/correct_anwser', CorrectAnwserController.index);

export default routes;
