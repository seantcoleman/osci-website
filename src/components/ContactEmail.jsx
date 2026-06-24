import { contactEmail } from "../lib/site";

export default function ContactEmail() {
  if (contactEmail) {
    return <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;
  }
  return (
    <span className="text-pulse-text-secondary">
      the email address on our App Store listing once published
    </span>
  );
}
