import { handleRouteError, jsonOk } from "@/lib/forms/api";
import { joinUsApplicantHtml, joinUsApplicantText, joinUsEmailHtml, joinUsEmailText } from "@/lib/forms/templates";
import { parseJoinUsBody } from "@/lib/forms/validate";
import { requireResendConfig } from "@/lib/resend/env";
import { sendEmail, sendInboxEmail } from "@/lib/resend/send";

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

    const { apiKey, from, to } = requireResendConfig();
    try {
      await sendEmail({
        apiKey,
        from,
        to: [data.email],
        subject: "We received your SIOX Transports application",
        html: joinUsApplicantHtml(data.name),
        text: joinUsApplicantText(data.name),
        replyTo: to,
      });
    } catch (confirmErr) {
      console.warn("[join-us] applicant confirmation email failed:", confirmErr);
    }

    return jsonOk();
  } catch (err) {
    return handleRouteError(err);
  }
}
