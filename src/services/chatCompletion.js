import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const apiKey = import.meta.env.VITE_APP_OPENAI_KEY

export async function chatAI(messages){

    const client = new ModelClient(
        "https://models.github.ai/inference",
        new AzureKeyCredential(apiKey),
    );


    const response = await client.path("/chat/completions").post({
        body: {
            messages: messages,
            model: "openai/gpt-4o-mini",
            temperature: 0.5,
            max_tokens: 1000,
            top_p: 1.0,
        }
    });

    if (response.status !== "200") {
        throw response.body.error;
    }

    const object = response.body.choices[0].message

    return object
}