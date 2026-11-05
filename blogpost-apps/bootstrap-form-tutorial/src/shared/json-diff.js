// Object-key order is irrelevant; array order and missing keys are significant.
export function diffJson(before, after, path = "$", changes = []) {
  if (Object.is(before, after)) return changes;

  const object = (value) => value !== null && typeof value === "object";
  if (
    object(before) &&
    object(after) &&
    Array.isArray(before) === Array.isArray(after)
  ) {
    for (const key of new Set([
      ...Object.keys(before),
      ...Object.keys(after),
    ])) {
      const next = `${path}/${String(key).replaceAll("~", "~0").replaceAll("/", "~1")}`;
      const hasBefore = Object.hasOwn(before, key),
        hasAfter = Object.hasOwn(after, key);

      if (!hasBefore || !hasAfter)
        changes.push({
          path: next,
          kind: hasBefore ? "removed" : "added",
          ...(hasBefore ? { before: before[key] } : { after: after[key] }),
        });
      else diffJson(before[key], after[key], next, changes);
    }
  } else changes.push({ path, kind: "changed", before, after });

  return changes;
}
