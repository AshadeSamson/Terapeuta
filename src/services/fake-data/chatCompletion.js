import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const apiKey = import.meta.env.VITE_APP_OPENAI_KEY

export async function chatAI(messages){

    const client = new ModelClient(
        "https://models.inference.ai.azure.com",
        new AzureKeyCredential(apiKey),
    );


    const response = await client.path("/chat/completions").post({
        body: {
            messages: messages,
            model: "Meta-Llama-3.1-405B-Instruct",
            temperature: 0.5,
            max_tokens: 2048,
            top_p: 0.2
        }
    });

    if (response.status !== "200") {
        throw response.body.error;
    }

    const object = response.body.choices[0].message

    return object
}