import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Genere /robots.txt.
 *
 * Les crawlers IA sont autorises explicitement : on veut etre cite par
 * ChatGPT, Claude, Perplexity et Copilot. Pour en bloquer un, passer son
 * `allow: "/"` en `disallow: "/"`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },

      // Moteurs de recherche classiques
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },

      // Crawlers IA : indexation et citation
      { userAgent: "OAI-SearchBot", allow: "/" },   // ChatGPT Search
      { userAgent: "ChatGPT-User", allow: "/" },    // navigation ChatGPT
      { userAgent: "GPTBot", allow: "/" },          // entrainement OpenAI
      { userAgent: "ClaudeBot", allow: "/" },       // Anthropic
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" }, // Gemini / Vertex
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
