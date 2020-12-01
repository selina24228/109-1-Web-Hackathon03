import Question from '../models/Question'
import Answer from '../models/Answer'

exports.GetContents = async (req, res) => {
  // TODO : get questions from mongodb and return to frontend
  try{
	let questions = await Question.find();
	console.log(questions);
	res.status(200).send({message: 'success', contents: questions})
  }catch(e){
	res.status(403).send({message: 'error', contents: []})
  }
}

exports.CheckAns = async (req, res) => {
  // TODO : get answers from mongodb,
  let answers = await Answer.find({});
  // check answers coming from frontend and return score to frontend
  console.log(req);
  
  return Question;
}
