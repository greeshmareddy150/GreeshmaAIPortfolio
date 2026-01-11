
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILL_GROUPS, EDUCATIONS, CERTIFICATIONS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI Assistant for Greeshma B's portfolio. 
Your goal is to answer questions about Greeshma's professional background, skills, and experience.
Be professional, concise, and enthusiastic.

Context about Greeshma:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location}
Summary: ${PERSONAL_INFO.summary}

Experience:
${EXPERIENCES.map(exp => `- ${exp.role} at ${exp.company} (${exp.period}): ${exp.highlights.join(' ')}`).join('\n')}

Skills:
${SKILL_GROUPS.map(group => `${group.category}: ${group.skills.join(', ')}`).join('\n')}

Education:
${EDUCATIONS.map(edu => `- ${edu.degree} from ${edu.institution}`).join('\n')}

Certifications:
${CERTIFICATIONS.map(cert => `- ${cert.name} by ${cert.issuer}`).join('\n')}

If asked about something not in her resume, politely say you only have information regarding her professional profile.
Do not make up facts.
`;

export async function chatWithResume(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble accessing my knowledge base right now. Please try asking again or check the resume sections below!";
  }
}
