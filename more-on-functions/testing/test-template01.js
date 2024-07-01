let fileLogger = function(msg) {

    // Put the message in a file
}

let consoleLogger = function(msg) {

    console.log(msg);
}

function logError(msg, loggers) {

    let errorMsg = 'ERROR: ' + msg;

    for (let i = 0; i < loggers.length; i++) {
    loggers[i](errorMsg);
    }
}

logError('Something broke!', [fileLogger, consoleLogger]);