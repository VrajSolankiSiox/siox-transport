export type SubmitResult = { ok: true; message?: string } | { ok: false; error: string; field?: string };

export async function postFormJson(url: string, body: Record<string, unknown>): Promise<SubmitResult> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
    field?: string;
    message?: string;
  };

  if (!res.ok) {
    return {
      ok: false,
      error: data.error || "Something went wrong. Please try again.",
      field: data.field,
    };
  }

  return { ok: true, message: data.message };
}
