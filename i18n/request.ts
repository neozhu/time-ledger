import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const loadMessages =
    locale === "zh"
      ? () => import("../messages/zh.json")
      : () => import("../messages/en.json");

  return {
    locale,
    messages: (await loadMessages()).default,
  };
});
