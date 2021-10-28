//browser control

//email
export interface ILogger{
    Log();
}
export class BaseLogger implements ILogger{
    Log(){
        console.log("Base");
    }
}
export class ConsoleLogger extends BaseLogger{
Log(){

  console.log("Using console logger")  
}
}
export class DbLogger extends BaseLogger{
    Log(){

        console.log("Using Db logger")  
      }
}