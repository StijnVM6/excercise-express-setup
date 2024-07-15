import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

// Ensure to call this before requiring any other modules!
Sentry.init({
    dsn: "https://7121600534249925fe4c98856ca8afb5@o4507606679158784.ingest.de.sentry.io/4507606689710160",
    integrations: [
        nodeProfilingIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions

    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1.0,
});

import express from "express";
import booksRouter from "./routes/books.js";
import recordsRouter from "./routes/records.js";
import loginRouter from "./routes/login.js";
import log from "./middleware/logMiddleware.js";
import "dotenv/config";

import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use(log);

app.use("/books", booksRouter);
app.use("/records", recordsRouter);
app.use("/login", loginRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/about', (req, res) => {
    const html = '<h1>About Us</h1><p>Welcome to our website!</p>';
    res.send(html);
});

// Add this after all routes,
// but before any and other error-handling middlewares are defined
Sentry.setupExpressErrorHandler(app.use(errorHandler));

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});
