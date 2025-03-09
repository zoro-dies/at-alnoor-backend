import userRouter from "./user.routes.js"

const init = (app) => {
    app.use("/api/user", userRouter);
    
};
  
export default init;