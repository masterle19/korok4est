import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/masterle19",
      Twitter: "https://twitter.com/notmasterle",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.TableOfContents(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Notes",
        limit: 4,
        filter: (f) =>
          f.slug!.startsWith("notes/") && f.slug! !== "notes/index" && !f.frontmatter?.noindex,
        linkToMore: "notes/" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Logs",
        limit: 2,
        filter: (f) => f.slug!.startsWith("journal/"),
        linkToMore: "journal/" as SimpleSlug,
      }),
    ),
  ],
  right: [
    Component.Backlinks(),
  ],
  beforeFooter: [
    Component.Graph({
      localGraph: {
        showTags: false,
      },
      globalGraph: {
        showTags: false,
      },
    }),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
