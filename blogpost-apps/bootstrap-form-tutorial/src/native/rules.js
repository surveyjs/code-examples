// Native business policy is separate from SurveyJS expressions, so parity can be tested.
export const homeWorker = (mode) => mode === "remote" || mode === "hybrid";
export const officeWorker = (mode) => mode === "office" || mode === "hybrid";

export const emergencyPhoneRequired = (method, options) =>
  method === "phone" || (options.stage === 5 && options.revision === "revised");

export const deliveryRequired = (options) =>
  options.stage === 5 &&
  options.revision === "revised" &&
  options.variant === "new-hire";
