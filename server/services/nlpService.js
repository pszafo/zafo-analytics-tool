const { OpenAI } = require('openai-api');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const interpretQuery = async (query) => {
  const response = await openai.complete({
    engine: 'davinci',
    prompt: `Translate the following query into a structured query for analytics:\n\nQuery: "${query}"\n\nStructured Query:`,
    maxTokens: 100,
    temperature: 0.5,
  });

  const interpretedQuery = response.data.choices[0].text.trim();
  return interpretedQuery;
};

module.exports = { interpretQuery };
