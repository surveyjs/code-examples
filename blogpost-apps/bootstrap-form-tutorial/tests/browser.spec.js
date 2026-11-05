import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  page.__errors = [];
  page.on("pageerror", (error) => page.__errors.push(error.message));
});

test.afterEach(async ({ page }) => {
  expect(page.__errors).toEqual([]);
});

const form = (page, engine) =>
  page.frameLocator(`iframe[data-engine="${engine}"]`);

async function text(frame, title, value) {
  const input = frame
    .locator("#app")
    .getByRole("textbox", { name: new RegExp(`^${title}`) })
    .first();
  await input.fill(value);
  await input.press("Tab");
}

async function pick(frame, title, value) {
  // Use question wrappers for SurveyJS; native controls have stable application IDs.
  const keys = {
    Department: "department",
    "Work mode": "workMode",
    "Contract type": "contractType",
    "Office location": "officeLocation",
    "Are you relocating?": "relocates",
  };
  const key = keys[title];

  const native = frame.locator(`#${key}`);
  const target = (await native.count())
    ? native
    : frame.locator(`[data-name="${key}"] select`);

  await target.focus();
  await target.selectOption(value);
}

async function date(frame, key, value) {
  const native = frame.locator(`#${key}`);
  const target = (await native.count())
    ? native
    : frame.locator(`[data-name="${key}"] input`);

  await target.fill(value);
  await target.press("Tab");
}

async function personal(frame) {
  await text(frame, "Full name", "Ada");
  await text(frame, "Email", "ada@example.com");
  await pick(frame, "Department", "Engineering");
}

async function employment(frame, { relocates = "no", fixed = false } = {}) {
  await pick(frame, "Work mode", "remote");
  await pick(frame, "Contract type", fixed ? "fixed" : "permanent");
  await date(frame, "startDate", "2027-01-10");
  if (fixed) await date(frame, "contractEnd", "2027-06-10");
  await text(frame, "Home working address", "10 Example Street");

  const relocating = frame.locator(
    '#relocates, [data-name="relocates"] select',
  );
  if (await relocating.count())
    await pick(frame, "Are you relocating?", relocates);
}

async function next(frame) {
  await frame
    .locator("#app")
    .getByRole("button", { name: "Next", exact: true })
    .click();
}

async function contact(
  frame,
  { revision = "original", index = 0, method = "email" } = {},
) {
  const native = frame.locator("#contacts > section").nth(index);
  const survey = frame.locator(".sd-paneldynamic__panel-wrapper").nth(index);
  const row = (await native.count()) ? native : survey;

  await row.getByRole("textbox", { name: /^Contact name/ }).fill("Lee");
  let select = row.locator("select").nth(0);
  await select.focus();
  await select.selectOption("Friend");

  select = row.locator("select").nth(1);
  await select.focus();
  await select.selectOption(method);

  const email = row.getByRole("textbox", { name: /^Contact email/ });
  if (method === "email") {
    await email.fill("lee@example.com");
    await email.press("Tab");
  }

  if (revision === "revised" || method === "phone") {
    const phone = row.getByRole("textbox", { name: /^Contact phone/ });
    await phone.fill("+1 555 0100");
    await phone.press("Tab");
  }
}

async function fits(frame) {
  await expect
    .poll(() =>
      frame
        .locator("main")
        .evaluate(
          (main) =>
            Math.ceil(main.getBoundingClientRect().bottom) <= innerHeight,
        ),
    )
    .toBe(true);
  await expect
    .poll(() =>
      frame
        .locator("html")
        .evaluate(() => document.scrollingElement.scrollHeight <= innerHeight),
    )
    .toBe(true);
}

for (const engine of ["native", "survey"]) {
  test(`${engine}: stage 1 is genuinely three fields and validates email`, async ({
    page,
  }) => {
    await page.goto("/?stage=1");
    const f = form(page, engine);
    await expect(f.locator("#app input,#app select")).toHaveCount(3);

    await personal(f);
    await text(f, "Email", "bad");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(f.locator("#result")).toHaveText("");

    await text(f, "Email", "ada@example.com");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(f.locator("#status")).toContainText("Validated locally");
    expect(JSON.parse(await f.locator("#result").textContent())).toEqual({
      definitionVersion: 1,
      workflow: "new-hire",
      employee: {
        name: "Ada",
        email: "ada@example.com",
        department: "Engineering",
      },
    });
  });

  test(`${engine}: stage 2 date order, conditional fields and draft restoration`, async ({
    page,
  }) => {
    await page.goto("/?stage=2&styling=aligned");
    const f = form(page, engine);

    await personal(f);
    await employment(f, { fixed: true });

    await date(f, "contractEnd", "2027-01-01");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(f.locator("#result")).toHaveText("");
    await expect(
      f.getByText("End date must be on or after start date.", { exact: true }),
    ).toBeVisible();

    await date(f, "contractEnd", "2027-06-10");
    await pick(f, "Work mode", "office");
    await expect(
      f.getByRole("textbox", { name: /^Home working address/ }),
    ).toBeHidden();
    await pick(f, "Office location", "London");
    await pick(f, "Work mode", "remote");
    await expect(
      f.getByRole("textbox", { name: /^Home working address/ }),
    ).toHaveValue("10 Example Street");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(f.locator("#status")).toContainText("Validated locally");

    const result = JSON.parse(await f.locator("#result").textContent());
    expect(result.employment.officeLocation).toBeUndefined();
    expect(result.employment.contractEnd).toBe("2027-06-10");
  });

  test(`${engine}: stage 3 per-contact rules, list bounds and data`, async ({
    page,
  }) => {
    await page.goto("/?stage=3&styling=aligned");
    const f = form(page, engine);

    await personal(f);
    await employment(f);
    await contact(f);

    await f.getByRole("button", { name: "Add contact", exact: true }).click();
    await contact(f, { index: 1, method: "phone" });

    await f.getByRole("button", { name: "Add contact", exact: true }).click();
    await contact(f, { index: 2 });
    await fits(f);
    await f
      .getByRole("button", { name: /Remove contact/ })
      .last()
      .click();
    await f
      .getByRole("button", { name: /Remove contact/ })
      .last()
      .click();
    await expect(f.getByRole("button", { name: /Remove contact/ })).toHaveCount(
      0,
    );
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(f.locator("#status")).toContainText("Validated locally");

    const result = JSON.parse(await f.locator("#result").textContent());
    expect(result.emergencyContacts).toEqual([
      {
        name: "Lee",
        relationship: "Friend",
        contactMethod: "email",
        email: "lee@example.com",
      },
    ]);
  });

  for (const variant of ["new-hire", "profile-update"])
    for (const revision of ["original", "revised"]) {
      test(`${engine}: stage 5 ${variant}, ${revision} shared change and conditional page`, async ({
        page,
      }) => {
        await page.goto(
          `/?stage=5&variant=${variant}&revision=${revision}&styling=aligned`,
        );
        const f = form(page, engine);

        await personal(f);

        await next(f);
        await employment(f, { relocates: "yes" });

        await next(f);
        await contact(f, { revision });

        await next(f);
        await expect(
          f.getByRole("textbox", { name: /^Destination city/ }),
        ).toBeVisible();
        await text(f, "Destination city", "Berlin");
        await date(f, "moveDate", "2027-01-15");

        await next(f);
        if (variant === "new-hire") {
          const delivery = f.getByRole("textbox", {
            name: /^Delivery instructions/,
          });
          await expect(delivery).toBeVisible();
          await f
            .getByText("I confirm these details are correct.", { exact: true })
            .click();
          if (revision === "revised") {
            await f
              .getByRole("button", { name: "Complete", exact: true })
              .click();
            await expect(f.locator("#result")).toHaveText("");
            await text(f, "Delivery instructions", "Ring the bell");
          }
        } else {
          await expect(
            f.getByRole("textbox", { name: /^Delivery instructions/ }),
          ).toHaveCount(0);
          await f
            .getByText("I confirm these details are correct.", { exact: true })
            .click();
        }
        await f.getByRole("button", { name: "Complete", exact: true }).click();
        await expect(f.locator("#status")).toContainText("Validated locally");

        const result = JSON.parse(await f.locator("#result").textContent());
        expect(result.definitionVersion).toBe(revision === "revised" ? 2 : 1);
        expect(result.workflow).toBe(variant);
        expect(result.relocation).toEqual({
          city: "Berlin",
          moveDate: "2027-01-15",
        });
        expect(result.emergencyContacts[0].phone).toBe(
          revision === "revised" ? "+1 555 0100" : undefined,
        );
        if (variant === "profile-update") expect(result.setup).toBeUndefined();
        await fits(f);
      });
    }
}

test("adapter-only mode loads no application SurveyJS layout CSS; aligned mode declares it", async ({
  page,
}) => {
  const requests = [];
  page.on("request", (r) => requests.push(r.url()));
  await page.goto("/?stage=3&styling=adapter");
  const f = form(page, "survey");
  await expect(f.locator("#app input").first()).toBeVisible();
  expect(requests.some((url) => url.includes("/src/survey/layout.css"))).toBe(
    false,
  );
  await expect(f.locator("#app")).not.toHaveClass(/comparison-survey/);

  await page.goto("/?stage=3&styling=aligned");
  await expect(form(page, "survey").locator("#app")).toHaveClass(
    /comparison-survey/,
  );
  expect(requests.some((url) => url.includes("/src/survey/layout.css"))).toBe(
    true,
  );
});

test("comparison controls, theme and narrow screens apply to both frames", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("navigation")).toHaveCount(0);
  await page.locator("#options select[name=stage]").selectOption("5");
  await page
    .locator("#options select[name=variant]")
    .selectOption("profile-update");
  await page.locator("#options select[name=revision]").selectOption("revised");
  await page.getByRole("button", { name: "Load comparison" }).click();
  for (const engine of ["native", "survey"]) {
    await expect(
      form(page, engine).getByRole("textbox", { name: /^Full name/ }),
    ).toBeVisible();
    await expect(form(page, engine).locator("#options")).toHaveCount(0);
    await fits(form(page, engine));
  }

  await page.getByRole("button", { name: "Toggle color mode" }).click();
  for (const engine of ["native", "survey"])
    await expect(form(page, engine).locator("html")).toHaveAttribute(
      "data-bs-theme",
      "dark",
    );

  await page.setViewportSize({ width: 390, height: 844 });
  const frames = page.locator("iframe");
  await expect
    .poll(async () => (await frames.nth(1).boundingBox()).y)
    .toBeGreaterThan((await frames.nth(0).boundingBox()).y);
});

for (const engine of ["native", "survey"]) {
  test(`${engine}: stage 4 removes relocation from navigation and output`, async ({
    page,
  }) => {
    await page.goto("/?stage=4&styling=aligned");
    const f = form(page, engine);

    await personal(f);

    await next(f);
    await employment(f, { relocates: "yes" });

    await next(f);
    await contact(f);

    await next(f);
    await text(f, "Destination city", "Draft city");
    await date(f, "moveDate", "2027-01-15");
    await f.getByRole("button", { name: "Previous", exact: true }).click();
    await f.getByRole("button", { name: "Previous", exact: true }).click();

    await pick(f, "Are you relocating?", "no");

    await next(f);
    await next(f);
    await expect(
      f.getByRole("textbox", { name: /^Destination city/ }),
    ).toBeHidden();
    await f
      .getByText("I confirm these details are correct.", { exact: true })
      .click();
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(f.locator("#status")).toContainText("Validated locally");

    const result = JSON.parse(await f.locator("#result").textContent());
    expect(result.relocates).toBe(false);
    expect(result.relocation).toBeUndefined();
    await fits(f);
  });
}

test("profile update loads the same existing employee in both implementations", async ({
  page,
}) => {
  await page.goto("/?stage=5&variant=profile-update&revision=revised");
  for (const engine of ["native", "survey"]) {
    const f = form(page, engine);
    await expect(f.getByRole("textbox", { name: /^Full name/ })).toHaveValue(
      "Alex Morgan",
    );
    await expect(
      f.getByRole("textbox", { name: /^Email/ }).first(),
    ).toHaveValue("alex@example.com");

    await next(f);
    await next(f);
    await expect(f.getByRole("textbox", { name: /^Contact name/ })).toHaveValue(
      "Sam Morgan",
    );
    await expect(
      f.getByRole("textbox", { name: /^Contact phone/ }),
    ).toHaveValue("+44 20 0000 0000");
  }
});

async function sampleComplete(f) {
  await f
    .getByRole("button", { name: "Fill sample data", exact: true })
    .click();
  while (await f.getByRole("button", { name: "Next", exact: true }).isVisible())
    await next(f);
  await f.getByRole("button", { name: "Complete", exact: true }).click();
  await expect(f.locator("#status")).toContainText("Validated locally");
}

for (const engine of ["native", "survey"]) {
  test(`${engine}: three-contact maximum is enforced`, async ({ page }) => {
    await page.goto("/?stage=3");
    const f = form(page, engine);

    await f.getByRole("button", { name: "Add contact", exact: true }).click();

    await f.getByRole("button", { name: "Add contact", exact: true }).click();
    await expect(f.getByRole("textbox", { name: /^Contact name/ })).toHaveCount(
      3,
    );

    const add = f.getByRole("button", { name: "Add contact", exact: true });
    if (await add.isVisible()) await expect(add).toBeDisabled();
    else await expect(add).toBeHidden();
    await f
      .getByRole("button", { name: /Remove contact/ })
      .last()
      .click();
    await expect(add).toBeVisible();
    await expect(add).toBeEnabled();
    await add.click();
    await expect(f.getByRole("textbox", { name: /^Contact name/ })).toHaveCount(
      3,
    );
    await fits(f);
  });

  test(`${engine}: field-level errors are visible and clear after correction`, async ({
    page,
  }) => {
    await page.goto("/?stage=1");
    const f = form(page, engine);
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    const name = f.getByRole("textbox", { name: /^Full name/ });
    await expect(name).toHaveAttribute("aria-invalid", "true");
    if (engine === "native")
      await expect(f.locator("#name-error")).toHaveText(
        "This field is required.",
      );
    else await expect(f.locator(".sd-question__erbox").first()).toBeVisible();

    await personal(f);
    await text(f, "Email", "invalid");
    await f.getByRole("button", { name: "Complete", exact: true }).click();

    const email = f.getByRole("textbox", { name: /^Email/ });
    await expect(email).toHaveAttribute("aria-invalid", "true");
    if (engine === "native")
      await expect(f.locator("#email-error")).toHaveText(
        "Enter a valid email address.",
      );
    else
      await expect(
        f.locator('[data-name="email"] .sd-question__erbox'),
      ).toContainText(/e-?mail/i);

    await text(f, "Email", "alex@example.com");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(email).not.toHaveAttribute("aria-invalid", "true");
    await expect(f.locator("#status")).toContainText("Validated locally");
  });

  test(`${engine}: a@b validator behavior is explicit`, async ({ page }) => {
    await page.goto("/?stage=1");
    const f = form(page, engine);

    await personal(f);
    await text(f, "Email", "a@b");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    if (engine === "native") {
      await expect(f.locator("#status")).toContainText("Validated locally");
      expect(
        JSON.parse(await f.locator("#result").textContent()).employee.email,
      ).toBe("a@b");
    } else {
      await expect(f.locator("#result")).toHaveText("");
      await expect(
        f.locator('[data-name="email"] .sd-question__erbox'),
      ).toBeVisible();
    }
  });
}

for (const variant of ["new-hire", "profile-update"])
  for (const revision of ["original", "revised"]) {
    test(`sample data parity: ${variant}, ${revision}; response appears only after submit`, async ({
      page,
    }) => {
      await page.goto(`/?stage=5&variant=${variant}&revision=${revision}`);
      await expect(
        page.locator("#response-comparison,#compare-responses"),
      ).toHaveCount(0);

      for (const engine of ["native", "survey"]) {
        const f = form(page, engine);
        await expect(f.locator("#output")).toBeHidden();
        await sampleComplete(f);
        await expect(f.locator("#output")).toBeVisible();
      }
      expect(
        JSON.parse(await form(page, "native").locator("#result").textContent()),
      ).toEqual(
        JSON.parse(await form(page, "survey").locator("#result").textContent()),
      );

      for (const engine of ["native", "survey"]) {
        const f = form(page, engine);
        await f
          .getByRole("button", { name: "Fill sample data", exact: true })
          .click();
        await expect(f.locator("#output")).toBeHidden();
        await text(f, "Full name", "Changed");
        await expect(f.locator("#output")).toBeHidden();
        await sampleComplete(f);
        await expect(f.locator("#output")).toBeVisible();
      }
    });
  }

test("lightweight embed and maintenance disclosures without bundle/response panels", async ({
  page,
}) => {
  await page.goto("/?stage=5&variant=profile-update");
  for (const engine of ["native", "survey"]) {
    await expect(
      page.locator(`iframe[data-engine="${engine}"]`),
    ).toHaveAttribute("src", /^embed.html\?/);
    await expect(
      form(page, engine).locator("#stage-guide,#options,#styling-audit"),
    ).toHaveCount(0);
  }
  await expect(
    page.locator(
      "#bundle-sizes,#bundle-note,#response-comparison,#styling-audit,#styling-note,#maintenance,#example-title",
    ),
  ).toHaveCount(0);
  await expect(
    page.getByText("Production JS/CSS totals per embedded form", {
      exact: true,
    }),
  ).toHaveCount(0);
  await expect(
    page.getByText("What did the adapter do, and what did we add?", {
      exact: true,
    }),
  ).toHaveCount(0);
  await expect(page.locator("select[name=styling]")).toBeVisible();
  await expect(page.getByText(/Validation difference:/)).toHaveCount(0);

  for (const engine of ["native", "survey"])
    await expect(
      form(page, engine).getByRole("button", {
        name: "Fill sample data",
        exact: true,
      }),
    ).toBeEnabled();
});

for (const stage of [1, 2, 3, 4])
  test(`sample data parity at stage ${stage}`, async ({ page }) => {
    await page.goto(`/?stage=${stage}`);
    for (const engine of ["native", "survey"]) {
      const f = form(page, engine);
      await expect(f.locator("#output")).toBeHidden();
      await sampleComplete(f);
      await expect(f.locator("#output")).toBeVisible();
    }
    expect(
      JSON.parse(await form(page, "native").locator("#result").textContent()),
    ).toEqual(
      JSON.parse(await form(page, "survey").locator("#result").textContent()),
    );
  });

for (const engine of ["native", "survey"])
  test(`${engine}: invalid submission stays hidden; edit hides previous response`, async ({
    page,
  }) => {
    await page.goto("/?stage=1");
    const f = form(page, engine);
    await expect(f.locator("#output")).toBeHidden();
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(f.locator("#output")).toBeHidden();
    await sampleComplete(f);
    await expect(f.locator("#output")).toBeVisible();

    await text(f, "Full name", "Edited");
    await expect(f.locator("#output")).toBeHidden();
    await expect(f.locator("#result")).toHaveText("");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(f.locator("#output")).toBeVisible();
    expect(
      JSON.parse(await f.locator("#result").textContent()).employee.name,
    ).toBe("Edited");
    await fits(f);
  });

for (const engine of ["native", "survey"])
  test(`${engine}: conditional repeated field reports and clears its error`, async ({
    page,
  }) => {
    await page.goto("/?stage=3");
    const f = form(page, engine);
    await f
      .getByRole("button", { name: "Fill sample data", exact: true })
      .click();
    const phone = f.getByRole("textbox", { name: /^Contact phone/ });
    await phone.fill("");
    await phone.press("Tab");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(phone).toHaveAttribute("aria-invalid", "true");
    if (engine === "native")
      await expect(f.locator('[id$="-phone-error"]').last()).toHaveText(
        "This field is required.",
      );
    else
      await expect(
        f.locator('[data-name="phone"] .sd-question__erbox').last(),
      ).toContainText("Response required.");

    await phone.fill("+44 20 0000 0003");
    await phone.press("Tab");
    await f.getByRole("button", { name: "Complete", exact: true }).click();
    await expect(phone).not.toHaveAttribute("aria-invalid", "true");
    await expect(f.locator("#status")).toContainText("Validated locally");
  });

for (const stage of [3, 4, 5])
  test(`native stage ${stage}: initialization and sample fills are silent; user Add announces`, async ({
    page,
  }) => {
    await page.goto(`/?stage=${stage}`);
    const f = form(page, "native");
    await expect(
      form(page, "survey").getByRole("button", {
        name: "Fill sample data",
        exact: true,
      }),
    ).toBeEnabled();
    await expect(f.locator("#contact-status")).toHaveText("");
    await f
      .getByRole("button", { name: "Fill sample data", exact: true })
      .click();
    await expect(f.locator("#contact-status")).toHaveText("");
    if (stage >= 4) {
      await next(f);
      await next(f);
    }

    const add = f.getByRole("button", { name: "Add contact", exact: true });
    await expect(add).toHaveClass(/btn-outline-secondary/);
    await add.click();
    await expect(f.locator("#contact-status")).toHaveText("Contact added.");
    await expect(
      f.getByRole("textbox", { name: /^Contact name/ }).last(),
    ).toBeFocused();
    await f
      .getByRole("button", { name: "Fill sample data", exact: true })
      .click();
    await expect(f.locator("#contact-status")).toHaveText("");
  });

for (const stage of [3, 4, 5])
  test(`contact layout stage ${stage}: one group title and normal native Remove spacing`, async ({
    page,
  }) => {
    await page.goto(`/?stage=${stage}&styling=aligned`);
    for (const engine of ["native", "survey"]) {
      const f = form(page, engine);
      await f
        .getByRole("button", { name: "Fill sample data", exact: true })
        .click();
      if (stage >= 4) {
        await next(f);
        await next(f);
      }
      await expect(
        f.getByText("Emergency contacts", { exact: true }),
      ).toHaveCount(1);
      await expect(
        f.getByText("Include 1 to 3 emergency contacts.", { exact: true }),
      ).toBeVisible();
      await fits(f);
    }

    const native = form(page, "native");
    const row = native.locator("#contacts > section").first();
    const gap = await row.evaluate((row) => {
      const field = row.querySelector('input[data-key="email"]');
      const button = row.querySelector("button");
      return (
        button.getBoundingClientRect().top -
        field.getBoundingClientRect().bottom
      );
    });

    expect(gap).toBeGreaterThanOrEqual(12);

    expect(gap).toBeLessThanOrEqual(20);
  });

for (const stage of [2, 3, 4])
  test(`aligned controls stage ${stage}: equal textarea, Add or navigation layout`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1562, height: 1000 });
    await page.goto(`/?stage=${stage}&styling=aligned`);
    const frames = ["native", "survey"].map((engine) => form(page, engine));
    for (const f of frames)
      await f
        .getByRole("button", { name: "Fill sample data", exact: true })
        .click();

    if (stage === 2) {
      for (const f of frames)
        await expect(f.locator("textarea").first()).toHaveAttribute(
          "rows",
          "3",
        );

      const tops = [];
      for (const f of frames)
        tops.push(
          await f
            .getByRole("button", { name: "Complete", exact: true })
            .evaluate((e) => e.getBoundingClientRect().top),
        );
      // WebKit native date/textarea metrics can differ slightly from the engine wrapper.
      expect(Math.abs(tops[0] - tops[1])).toBeLessThanOrEqual(4);
    } else if (stage === 3) {
      const measurements = [];
      for (const f of frames)
        measurements.push(
          await f
            .getByRole("button", { name: "Add contact", exact: true })
            .evaluate((e) => ({
              left: e.getBoundingClientRect().left,
              width: e.getBoundingClientRect().width,
              height: e.getBoundingClientRect().height,
              border: getComputedStyle(e).borderColor,
            })),
        );
      expect(
        Math.abs(measurements[0].left - measurements[1].left),
      ).toBeLessThanOrEqual(3);
      expect(
        Math.abs(measurements[0].width - measurements[1].width),
      ).toBeLessThanOrEqual(3);
      expect(
        Math.abs(measurements[0].height - measurements[1].height),
      ).toBeLessThanOrEqual(2);
      expect(measurements[0].border).toBe(measurements[1].border);
    } else {
      await expect(frames[0].locator("#progress")).toHaveClass(
        "visually-hidden",
      );

      const tops = [];
      for (const f of frames)
        tops.push(
          await f
            .getByRole("button", { name: "Next", exact: true })
            .evaluate((e) => e.getBoundingClientRect().top),
        );
      expect(Math.abs(tops[0] - tops[1])).toBeLessThanOrEqual(2);
      await expect(
        frames[0].getByRole("button", { name: "Next", exact: true }),
      ).toHaveClass(/btn-outline-primary/);
    }

    for (const f of frames) await fits(f);
  });
