export async function sendGuestChat(
  sessionId: string,
  message: string
): Promise<{ reply: string }> {
  const res = await fetch("http://localhost:3001/api/chat/guest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sessionId,
      message,
    }),
  });

  if (!res.ok) {
    throw new Error("Guest chat failed");
  }

  return res.json();
}

