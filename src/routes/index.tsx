import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teacher Salary and Retention" },
      { name: "description", content: "Interactive view of teacher salary and retention across Massachusetts school districts." },
      { property: "og:title", content: "Teacher Salary and Retention" },
      { property: "og:description", content: "Interactive view of teacher salary and retention across Massachusetts school districts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/salary-retention.html"
      title="Teacher Salary and Retention"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
