import { handleRouteError, jsonOk } from "@/lib/forms/api";
import { contactEmailHtml, contactEmailText } from "@/lib/forms/templates";
import { parseContactBody } from "@/lib/forms/validate";
import { sendInboxEmail } from "@/lib/resend/send";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const data = parseContactBody(body);

    await sendInboxEmail({
      subject: `Contact form: ${data.name}`,
      html: contactEmailHtml(data),
      text: contactEmailText(data),
      replyTo: data.email,
    });

    return jsonOk();
  } catch (err) {
    return handleRouteError(err);
  }
}
