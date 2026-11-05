// Reused by every native contact row; local() binds stable row IDs to field markup.
export function contactFields(local, options) {
  const revised = options.stage === 5 && options.revision === "revised";

  return (
    local("name", "Contact name", { required: true }) +
    local("relationship", "Relationship", {
      required: true,
      choices: [
        ["Family", "Family"],
        ["Partner", "Partner"],
        ["Friend", "Friend"],
      ],
    }) +
    local("contactMethod", "Preferred contact method", {
      required: true,
      choices: [
        ["email", "Email"],
        ["phone", "Phone"],
      ],
    }) +
    local("email", "Contact email", { type: "email", hidden: true }) +
    local("phone", "Contact phone", { type: "tel", hidden: !revised }) +
    (revised ? local("notes", "Contact notes") : "")
  );
}
