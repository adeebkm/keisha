export type SimResult = {
  id: string;
  platform: string;
  displayName: string;
  snippet: string;
  urlLike: string;
  discoverability: "High" | "Low";
  footprint: "Present" | "Absent";
  race: "White American" | "African American";
  location?: string;
  imageKey?: string;
  missingNote?: string;
  currentRole?: string;
  currentCompany?: string;
  followers?: string;
  sideImageUrl?: string;
};

export const RESULTS_Keisha_Williams: SimResult[] = [
  {
    id: "keisha1",
    platform: "Department of Justice (.gov)",
    displayName: "Woman Sentenced to 15 Years for $5 Million Fraud",
    snippet: "Keisha Williams, 44, of Washington, D.C., was sentenced to 15 years in prison for wire fraud and aggravated identity theft in connection with a scheme to defraud ...",
    urlLike: "www.justice.gov › usao-edva › woman-sentence...",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "Washington, DC",
    imageKey: "avatar1"
  },
  {
    id: "keisha2",
    platform: "Instagram",
    displayName: "Keisha Williams (@me__my4)",
    snippet: "Posts and reels from Keisha Williams. Follow for lifestyle content and daily updates.",
    urlLike: "Instagram · me__my4",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "",
    followers: "11.9K+",
    imageKey: "avatar2"
  },
  {
    id: "keisha3",
    platform: "Sentara",
    displayName: "Keisha J. Williams, M.D.",
    snippet: "Dr. Keisha J. Williams is a board-certified physician at Sentara. She specializes in internal medicine and provides comprehensive care for adult patients.",
    urlLike: "www.sentara.com › find-a-doctor-or-provider",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "",
    currentRole: "Physician",
    currentCompany: "Sentara Healthcare",
    imageKey: "avatar3"
  },
  {
    id: "keisha4",
    platform: "Yahoo",
    displayName: "Viral 'Judge Keisha Williams' Story Contains Fake ...",
    snippet: "A viral social media post about a judge named Keisha Williams sentencing a police officer contains fabricated details, according to fact-checkers.",
    urlLike: "www.yahoo.com › news › articles › fact-check-v...",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "",
    imageKey: "avatar4"
  },
  {
    id: "keisha5",
    platform: "Facebook",
    displayName: "Keisha Williams (@keisha518)",
    snippet: "Keisha Williams is on Facebook. Join Facebook to connect with Keisha Williams and others you may know.",
    urlLike: "Facebook · Keisha Williams",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "",
    followers: "2.3K+",
    imageKey: "avatar5"
  },
  {
    id: "keisha6",
    platform: "Duke University",
    displayName: "Keisha Williams | Human Resources - Duke HR",
    snippet: "Keisha Williams is a Human Resources professional at Duke University, supporting staff and faculty across the institution.",
    urlLike: "hr.duke.edu › Staff",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "Durham, NC",
    currentRole: "HR Professional",
    currentCompany: "Duke University",
    imageKey: "avatar6"
  },
  {
    id: "keisha7",
    platform: "CNBC",
    displayName: "Keisha Williams' $5 million scam let her travel the world in ...",
    snippet: "Keisha Williams used stolen identities to obtain credit cards and loans, racking up $5 million in charges. She used the money to fund a lavish lifestyle ...",
    urlLike: "www.cnbc.com › 2020/01/14 › keisha-williams-...",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "",
    imageKey: "avatar7"
  },
  {
    id: "keisha8",
    platform: "LinkedIn",
    displayName: "Keisha Williams, Esq., SPHR - Workplace Equality Advocate",
    snippet: "Keisha Williams is a Workplace Equality Advocate, Attorney, and HR professional. She is passionate about creating inclusive and equitable workplaces.",
    urlLike: "LinkedIn · Keisha Williams, Esq., SPHR",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "",
    followers: "620+",
    currentRole: "Workplace Equality Advocate",
    imageKey: "avatar8"
  },
  {
    id: "keisha9",
    platform: "NYCLU",
    displayName: "Keisha A. Williams",
    snippet: "Keisha A. Williams is an attorney at the New York Civil Liberties Union (NYCLU). She works on civil rights and constitutional law issues across New York State.",
    urlLike: "www.nyclu.org › about › our-people › keisha-a-...",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "New York, NY",
    currentRole: "Attorney",
    currentCompany: "NYCLU",
    imageKey: "avatar9"
  },
  {
    id: "keisha10",
    platform: "University of Maryland",
    displayName: "Keisha Williams - University Human Resources",
    snippet: "Keisha Williams serves in the University Human Resources department at the University of Maryland, providing HR services and support.",
    urlLike: "uhr.umd.edu › staff-directory › keisha-williams",
    discoverability: "Low",
    footprint: "Absent",
    race: "African American",
    location: "College Park, MD",
    currentRole: "HR Specialist",
    currentCompany: "University of Maryland",
    imageKey: "avatar10"
  },
];

export const SEARCH_RESULTS: Record<string, SimResult[]> = {
  Keisha_Williams: RESULTS_Keisha_Williams,
};
