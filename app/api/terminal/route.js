// app/api/terminal/route.js
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// 1. Import your actual website data
import { PROJECTS_DATA } from '../../../data/projects';
import { EXPERIENCE_DATA } from '../../../data/experience'; // If you created this

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { command } = await req.json();

    // 2. Dynamically inject the JSON into the System Prompt
    const systemPrompt = `You are the terminal OS for Marcus Liang's portfolio website. 
Your goal is to answer visitor questions about Marcus accurately, concisely, and in a professional but slightly robotic "terminal" tone. Keep answers under 3 sentences unless specifically asked for detail.

Here is the absolute source of truth regarding Marcus's background. Use this JSON data to answer any questions about his experience, skills, or projects:

=== MARCUS'S PROJECTS ===
${JSON.stringify(PROJECTS_DATA, null, 2)}

=== MARCUS'S EXPERIENCE ===
${JSON.stringify(EXPERIENCE_DATA, null, 2)}

If a user asks a question unrelated to Marcus, tech, or data science, politely refuse and remind them you are Marcus's portfolio OS.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: command }
      ],
      temperature: 0.2, // Lower temperature makes the AI stick closer to your exact JSON facts
    });

    return NextResponse.json({ text: completion.choices[0].message.content });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { text: "System Error: Connection to OpenAI core lost." }, 
      { status: 500 }
    );
  }
}