/*
 * ÜLESANNE: Kirjuta funktsioon `mostCommonFirstName`,
 * mis leiab kõige levinuma eesnime, saadab andmed AI-le ja loeb AI vastuse.
 */
import OpenAI from "openai";
import { readFileSync } from 'fs';


export async function mostCommonFirstName(): Promise<string> {
    const data = readFileSync('data.json', 'utf8');
    const client = new OpenAI({apiKey: ''});
    const prompt = `Tell me which is the most common name: ${data}`;

    const response = await client.responses.create({
        model: "gpt-5",
        input: prompt,
    });

    return response.output_text;
}
