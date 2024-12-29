$breakpoints: (
  mobile: 800px,
  desktop: 1100px,
);

$mobile: "(max-width: #{map-get($breakpoints, mobile)})";
$tablet: "(min-width: #{map-get($breakpoints, mobile)}) and (max-width: #{map-get($breakpoints, desktop)})";
$desktop: "(min-width: #{map-get($breakpoints, desktop)})";

$pageWidth: #{map-get($breakpoints, mobile)};
$sidePanelWidth: 250px;
$topSpacing: 6rem;
$boldWeight: 700;
$semiBoldWeight: 600;
$normalWeight: 400;

$mobileGrid: (
  templateRows: "auto auto auto auto auto auto",
  templateColumns: "auto",
  rowGap: "5px",
  columnGap: "5px",
  templateAreas:
    '"grid-sidebar-left"\
      "grid-header"\
      "grid-center"\
      "grid-sidebar-right"\
      "grid-graph"\
      "grid-footer"',
);

$tabletGrid: (
  templateRows: "auto auto auto auto auto",
  templateColumns: "#{$sidePanelWidth} auto",
  rowGap: "5px",
  columnGap: "5px",
  templateAreas:
    '"grid-sidebar-left grid-header"\
      "grid-sidebar-left grid-center"\
      "grid-sidebar-left grid-sidebar-right"\
      "grid-sidebar-left grid-graph"\
      "grid-sidebar-left grid-footer"',
);

$desktopGrid: (
  templateRows: "auto auto auto auto",
  templateColumns: "#{$sidePanelWidth} auto #{$sidePanelWidth}",
  rowGap: "5px",
  columnGap: "5px",
  templateAreas:
    '"grid-sidebar-left grid-header grid-sidebar-right"\
      "grid-sidebar-left grid-center grid-sidebar-right"\
      "grid-sidebar-left grid-graph grid-sidebar-right"\
      "grid-sidebar-left grid-footer grid-sidebar-right"',
);
