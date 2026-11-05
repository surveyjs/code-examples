// A response contract, not a validator for untrusted API requests.
export function toPayload(data, options) {
  const { stage, variant, revision } = options;
  const payload = {
    definitionVersion: revision === "revised" ? 2 : 1,
    workflow: variant,
    employee: {
      name: data.name ?? "",
      email: data.email ?? "",
      department: data.department ?? "",
    },
  };

  if (stage >= 2) {
    payload.employment = {
      workMode: data.workMode ?? "",
      contractType: data.contractType ?? "",
      startDate: data.startDate ?? "",
    };

    if (data.contractType === "fixed")
      payload.employment.contractEnd = data.contractEnd ?? "";
    if (["office", "hybrid"].includes(data.workMode))
      payload.employment.officeLocation = data.officeLocation ?? "";
    if (["remote", "hybrid"].includes(data.workMode))
      payload.employment.homeAddress = data.homeAddress ?? "";
  }

  if (stage >= 3)
    payload.emergencyContacts = (data.contacts ?? []).map((c) => ({
      name: c.name ?? "",
      relationship: c.relationship ?? "",
      contactMethod: c.contactMethod ?? "",
      ...(c.contactMethod === "email" ? { email: c.email ?? "" } : {}),
      ...(c.contactMethod === "phone" || revision === "revised"
        ? { phone: c.phone ?? "" }
        : {}),
      ...(stage === 5 && revision === "revised"
        ? { notes: c.notes ?? "" }
        : {}),
    }));

  if (stage >= 4) {
    payload.relocates = data.relocates === "yes";
    if (payload.relocates)
      payload.relocation = {
        city: data.relocationCity ?? "",
        moveDate: data.moveDate ?? "",
      };

    if (variant === "new-hire")
      payload.setup = {
        equipment: data.equipment ?? [],
        ...(["remote", "hybrid"].includes(data.workMode)
          ? { deliveryNotes: data.deliveryNotes ?? "" }
          : {}),
      };

    payload.confirmed = (data.confirmation ?? []).includes("confirmed");
  }

  return payload;
}

export function preview(data, options) {
  const payload = toPayload(data, options);
  document.querySelector("#result").textContent = JSON.stringify(
    payload,
    null,
    2,
  );
  document.querySelector("#output").hidden = false;
  document.querySelector("#status").textContent =
    "Validated locally. Nothing was sent or saved.";
}
