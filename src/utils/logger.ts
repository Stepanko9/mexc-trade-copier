import * as fs from 'fs';
import * as path from 'path';

class Logger {
    private logFilePath: string;

    constructor(filename: string) {
        this.logFilePath = path.join(__dirname, filename);
    }

    log(message: string): void {
        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} - ${message}\n`;
        fs.appendFileSync(this.logFilePath, logEntry, { flag: 'a' });
    }

    logError(message: string): void {
        this.log(`ERROR: ${message}`);
    }

    logInfo(message: string): void {
        this.log(`INFO: ${message}`);
    }

    logWarning(message: string): void {
        this.log(`WARNING: ${message}`);
    }
}

export default Logger;