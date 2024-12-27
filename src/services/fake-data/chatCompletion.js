import OpenAI from "openai";

const apiKey = import.meta.env.VITE_APP_OPENAI_KEY

export async function chatAI(messages){

    const client = new OpenAI({
        baseURL: "https://models.inference.ai.azure.com",
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
      });

    const response = await client.chat.completions.create({
      messages: messages,
      model: "gpt-4o-mini",
      temperature: 0.3,
      max_tokens: 1500,
      top_p: 1
    });

    const object = response.choices[0].message

    return object
}