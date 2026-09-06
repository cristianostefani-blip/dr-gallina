import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `Você é um assistente virtual de triagem jurídica do escritório Dr. Marcelo Gallina.
Regras estritas:
1. Baseie suas respostas única e exclusivamente na Lei Brasileira, Código Civil, Constituição Federal e normativas da OAB.
2. NUNCA afirme se uma causa está "ganha" ou "perdida". NUNCA tome decisões pelo usuário.
3. Aja apenas relatando o que a legislação ou jurisprudência pública dizem sobre o tema abordado.
4. Finalize SEMPRE as interações com a seguinte ressalva exata: "Nota: Esta resposta foi gerada por Inteligência Artificial baseada em transcrições legais e não substitui uma consulta formal ou parecer jurídico."`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Atualização arquitetural para o modelo exigido pela API atual do Google
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash-lite", 
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(message);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error) {
    console.error("Erro na API do Gemini:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação." },
      { status: 500 }
    );
  }
}