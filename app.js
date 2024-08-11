const express = require('express');
const app = express();
const port = 3000;

// Importing routers for different routes
const indexRouter = require('./src/routes/index');
const keywordRouter = require('./src/routes/keywords');
const seoRouter = require('./src/routes/seo');
const contentGenerationRouter = require('./src/routes/contentGeneration');
const competitorsRouter = require('./src/routes/competitors');

// Middleware
app.use(express.json());  // For parsing application/json
app.use(express.static('public'));  // For serving static files from the 'public' directory

// Routes
app.use('/', indexRouter);  // Route for home page
app.use('/keywords', keywordRouter);  // Route for keyword analysis
app.use('/seo', seoRouter);  // Route for On-Page SEO analysis
app.use('/content-generation', contentGenerationRouter);  // Route for content generation
app.use('/competitors', competitorsRouter);  // Route for competitor analysis

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

