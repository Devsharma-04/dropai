import os
from groq import Groq
from dotenv import load_dotenv # Yeh library chahiye hogi

# .env file ko load karein
load_dotenv()

# Ab API key yahan se uthegi
api_key = os.getenv("GROQ_API_KEY")

# Agar key nahi mili toh error message dikhayein
if not api_key:
    raise ValueError("GROQ_API_KEY not found in environment variables!")

client = Groq(api_key=api_key)

# ... baaki ka aapka code waisa hi rahega

chat_histories = {}

def ask_gemini_stream(user_message, session_id="default_user"):
    global chat_histories
    try:
        # 🔴 UPDATED SYSTEM INSTRUCTION WITH YOUR TEAM DETAILS
        system_instruction = (
            "You are 'Drop AI', a premium, highly smart, and professional AI assistant. "
            "Speak in a natural, friendly mix of Hindi and English (Hinglish), like a WhatsApp chat. "
            "You must remember the conversation context and give structured markdown responses.\n\n"
            "CRITICAL CREATOR IDENTITY RULES:\n"
            "If anyone asks about your creator, developer, owner, or who built/made you, you must proudly answer "
            "with this exact team structure in a beautiful Markdown format:\n"
            "- Developed by the brilliant team of Dream Career company:\n"
            "  1. **Aditya Bohra** (Class: 7B, Roll No: 2)\n"
            "  2. **Siddharth Bohra** (Class: 7B, Roll No: 36)\n"
            "  3. **Daksh Sharma** (Class: 7B, Roll No: 10)\n"
            "- Guided by the Visionary Founder: **Dev Sharma**\n"
            "Keep this tone respectful, proud, and celebratory for the team!"
        )

        if session_id not in chat_histories:
            chat_histories[session_id] = [{"role": "system", "content": system_instruction}]

        chat_histories[session_id].append({"role": "user", "content": user_message})

        # Groq stream call
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=chat_histories[session_id],
            temperature=0.6,
            stream=True,
        )

        accumulated_response = ""
        for chunk in completion:
            if chunk.choices[0].delta.content:
                token = chunk.choices[0].delta.content
                accumulated_response += token
                yield token

        chat_histories[session_id].append({"role": "assistant", "content": accumulated_response})

    except Exception as e:
        yield f"Drop AI (Groq) Error: {str(e)}"