import { handleRouteError, jsonOk } from "@/lib/forms/api";
import { joinUsEmailHtml, joinUsEmailText } from "@/lib/forms/templates";
import { parseJoinUsBody } from "@/lib/forms/validate";
import { sendInboxEmail } from "@/lib/resend/send";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const data = parseJoinUsBody(body);

    await sendInboxEmail({
      subject: `Driver application: ${data.name} — ${data.applyingFor}`,
      html: joinUsEmailHtml(data),
      text: joinUsEmailText(data),
      replyTo: data.email,
    });

    return jsonOk();
  } catch (err) {
    return handleRouteError(err);
  }
}
