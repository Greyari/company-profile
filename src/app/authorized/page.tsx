// ==========================================
// src/app/about/page.tsx
// ==========================================

import AuthorizedContents from "@/components/authorized/AuthorizedContents";
import AuthorizedHero from "@/components/authorized/AuthorizedHero";
import AuthorizedStory from "@/components/authorized/AuthorizedStory";

export default function AuthorizedPage() {
  return (
    <main>
      <AuthorizedHero />
      <AuthorizedStory />
      <AuthorizedContents />
    </main>
  );
}
