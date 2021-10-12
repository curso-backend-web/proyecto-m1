import  HttpError  from "http-errors";

const usersErrorHandler = (err, req, res, next) => {
    if(err instanceof HttpError.HttpError)
    res.json({error: err.message}).status(err.statusCode);
}

export default usersErrorHandler;