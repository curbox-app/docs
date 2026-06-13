    # Curbox Docs Writing Guide

    This guide tells you everything you need to know to write a documentation page for Curbox. You do not need access to the project. Write your file exactly as shown here, hand it over, and it will work.

    ---

    ## 1. File Format

    Every documentation page is a `.mdx` file. MDX is Markdown with the ability to use special components (explained later). Write it as plain text — you do not need a code editor; any text editor works.

    ---

    ## 2. The Frontmatter Block

    Every file **must** start with a frontmatter block. This is a section at the very top of the file, surrounded by triple dashes. It contains metadata about the page.

    ```
    ---
    title: Your Page Title Here
    description: One sentence that summarises what this page covers.
    sidebar:
    order: 5
    ---
    ```

    ### Rules for each field

    | Field | Required | Notes |
    |---|---|---|
    | `title` | Yes | Shows as the page heading and in the browser tab. Use title case. |
    | `description` | Yes | One sentence, plain English. Appears in SEO meta tags and search previews. Do not end with a full stop. |
    | `sidebar.order` | Yes | A number that controls the position of this page within its sidebar section. `1` appears first, `2` second, and so on. Decide the order your pages should appear in and assign numbers accordingly. If two pages share a number, their order between each other is undefined, so use unique numbers. |

    ---

    ## 3. The Import Line

    Immediately after the closing `---` of the frontmatter, add a blank line, then import the components you will use. Every component you use in the page body **must** be listed here, and you must not import components you do not use.

    ```
    import { Steps, Aside, Tabs, TabItem, Code } from '@astrojs/starlight/components';
    ```

    Import only what you need. Common combinations:

    - **Simple page, no special features:** No import needed (or omit the line entirely).
    - **Page with a numbered walkthrough:** `import { Steps } from '@astrojs/starlight/components';`
    - **Page with callout boxes:** `import { Aside } from '@astrojs/starlight/components';`
    - **Page with both:** `import { Steps, Aside } from '@astrojs/starlight/components';`
    - **Page with tabbed content:** `import { Tabs, TabItem } from '@astrojs/starlight/components';`
    - **Page with a code block that has a filename:** `import { Code } from '@astrojs/starlight/components';`

    After the import line, leave **one blank line**, then start your page body.

    ---

    ## 4. Full File Skeleton

    Here is the complete skeleton of a documentation page. Copy this and fill in the blanks.

    ```mdx
    ---
    title: Your Feature Name
    description: One sentence about what this feature does
    sidebar:
    order: 5
    ---

    import { Steps, Aside } from '@astrojs/starlight/components';


    One or two sentences of introduction. What is this feature? What problem does it solve? Keep it short.


    ## First Section Heading

    Body text here.


    ## Second Section Heading

    More body text.
    ```

    ---

    ## 5. Headings

    Use only `##` (H2) and `###` (H3). Never use `#` (H1) — the page title from the frontmatter is automatically rendered as H1.

    ```
    ## Main Section

    This is a top-level section.

    ### Subsection

    This is a subsection inside the main section.
    ```

    Do not skip levels. Never jump from `##` to `####`.

    ---

    ## 6. Paragraphs and Line Breaks

    - Leave a blank line between every paragraph.
    - Do not use two spaces at the end of a line to force a line break — use a blank line instead.
    - Keep paragraphs focused. One idea per paragraph.

    ---

    ## 7. Bold and Italic

    Use `**bold**` for UI element names (button labels, tab names, screen names) and for key terms being introduced for the first time.

    ```
    Tap **Reducers** in the bottom navigation bar.

    Curbox uses **Focus Groups** to organise your app blocks.
    ```

    Use `*italic*` sparingly, only for genuine emphasis or titles.

    ---

    ## 8. Inline Code

    Use backticks for anything the user would type exactly, such as package names, placeholder variables, URLs, command-line strings, or configuration values.

    ```
    The default redirect URL is `https://curbox.life`.

    Add the keyword `reddit` to block Reddit across all browsers.

    Use the `{app_usage_today}` placeholder to show today's app usage.
    ```

    ---

    ## 9. Bullet Lists

    Use `-` for unordered lists. Leave a blank line before and after the list.

    ```
    Curbox supports the following browsers:

    - Google Chrome
    - Brave
    - Vanadium (GrapheneOS)
    - Opera
    ```

    For a list where items need sub-items, indent with two spaces:

    ```
    - **Instagram Reels**
    - **YouTube Shorts**
    - Including the Shorts tab in the bottom nav
    - **Facebook Reels**
    ```

    ---

    ## 10. Numbered Lists (Plain Markdown)

    For a simple numbered list that does not need the styled step-by-step treatment, use regular Markdown:

    ```
    1. First thing.
    2. Second thing.
    3. Third thing.
    ```

    For interactive walkthroughs that tell the user what to do, use the `<Steps>` component instead (see Section 12).

    ---

    ## 11. Tables

    Tables are written in standard Markdown pipe syntax. Always include a header row and an alignment row.

    ```
    | Column One | Column Two | Column Three |
    |---|---|---|
    | Row 1 A | Row 1 B | Row 1 C |
    | Row 2 A | Row 2 B | Row 2 C |
    ```

    Use tables for:
    - Reference data (placeholder variables, rule syntax keys, supported apps)
    - Side-by-side comparisons

    Do not use tables for step-by-step instructions — use `<Steps>` for that.

    Example from the actual docs:

    ```
    | Placeholder | What it shows |
    |---|---|
    | `{app_usage_today}` | Total time spent in this specific app today |
    | `{screentime_today}` | Your total screen time across all apps today |
    | `{live_session_duration}` | How long you have been in this app continuously since you opened it |
    ```

    ---

    ## 12. The Steps Component

    Use `<Steps>` when you are walking the user through a numbered sequence of actions. Each numbered item is a step. The component renders them with large, styled step numbers.

    ```mdx
    <Steps>
    1. **Step Title in Bold**
    Description of what to do in this step. Can be one or more sentences.

    2. **Another Step**
    Description here. You can use **bold** for UI element names.

    3. **Final Step**
    Done.
    </Steps>
    ```

    ### Rules for Steps

    - The `<Steps>` opening tag must be on its own line with a blank line before it.
    - The `</Steps>` closing tag must be on its own line with a blank line after it.
    - Each step starts with its number and a period: `1.`, `2.`, `3.` — Markdown handles the numbering.
    - The step title is always **bold** (wrapped in `**`).
    - The step description sits on the line immediately below the title, indented with **three spaces**.
    - Leave a blank line between steps.
    - You can nest an `<Aside>` component inside a step — indent it to match the step description level.

    Example with a nested Aside inside a step:

    ```mdx
    <Steps>
    1. **Pick Your Time**
    Drag the slider to choose your session length.

    <Aside type="tip">
    Studies suggest 25 minutes is the ideal starting length for new users.
    </Aside>

    2. **Start Your Session**
    Tap **Start Focus**.
    </Steps>
    ```

    ---

    ## 13. The Aside Component (Callout Boxes)

    Use `<Aside>` for supplementary information that should be visually separated from the main text — tips, warnings, and notes.

    ```mdx
    <Aside type="tip">
    Your tip content here. Keep it to one or two sentences.
    </Aside>

    <Aside type="note">
    A neutral piece of information the reader should be aware of.
    </Aside>

    <Aside type="caution">
    Something the reader should be careful about.
    </Aside>

    <Aside type="danger">
    A serious warning about something that could go wrong.
    </Aside>
    ```

    ### Aside type guide

    | Type | When to use |
    |---|---|
    | `tip` | A helpful suggestion or best practice |
    | `note` | Neutral extra information, caveats, or platform-specific behaviour |
    | `caution` | Something the user could get wrong that causes a minor problem |
    | `danger` | Something that could cause data loss or serious issues |

    ### Rules for Aside

    - The opening and closing tags each go on their own line.
    - Leave a blank line before `<Aside>` and after `</Aside>`.
    - Do not overuse callouts. Maximum one or two per page, only when the information genuinely warrants it.

    ---

    ## 14. The Tabs Component

    Use `<Tabs>` and `<TabItem>` when the same topic has multiple distinct variations the reader can choose between (for example: beginner vs advanced, or different device types).

    ```mdx
    <Tabs>
    <TabItem label="Beginner">
        Content for the beginner tab. Write normally here.
    </TabItem>
    <TabItem label="Intermediate">
        Content for the intermediate tab.
    </TabItem>
    <TabItem label="Advanced">
        Content for the advanced tab.
    </TabItem>
    </Tabs>
    ```

    ### Rules for Tabs

    - The `label` attribute is the text shown on the tab button. Keep it short (one or two words).
    - Indent `<TabItem>` blocks with two spaces inside `<Tabs>`.
    - Content inside each `<TabItem>` can include any regular Markdown — paragraphs, lists, bold text, etc.
    - Leave a blank line before `<Tabs>` and after `</Tabs>`.

    ---

    ## 15. The Code Component

    Use `<Code>` when you want to display a code or command block **with a filename label** visible above it. This is the styled, titled version.

    ```mdx
    <Code
    code={`the exact code or command goes here`}
    lang="bash"
    title="Terminal"
    />
    ```

    For a multi-line code block with a title:

    ```mdx
    <Code
    code={`line one of code
    line two of code
    line three of code`}
    lang="text"
    title="Example Rule"
    />
    ```

    ### Code component attributes

    | Attribute | Required | Notes |
    |---|---|---|
    | `code` | Yes | The code string, wrapped in backtick template literal syntax: `` {`...`} `` |
    | `lang` | Yes | The language for syntax highlighting. Common values: `bash`, `text`, `json`, `kotlin` |
    | `title` | No | Filename or label shown above the block |

    ### Common `lang` values

    | Value | Use for |
    |---|---|
    | `bash` | Shell commands, terminal instructions |
    | `text` | Plain text, configuration rules, anything without a specific language |
    | `json` | JSON data |
    | `kotlin` | Android/Kotlin code |
    | `xml` | XML/Android layout files |

    ### When to use Code vs plain fenced code blocks

    Use `<Code>` when you want a visible title/filename label above the block.

    Use plain triple-backtick fences (`` ``` ``) when no title is needed:

    ````
    ```bash
    sha256sum curbox-v0.0.0.apk
    ```
    ````

    ---

    ## 16. Internal Links (Linking to Other Docs Pages)

    **Never hardcode the website domain or base path in a link.** The site is hosted in different places at different times and the base path changes. Instead, use the placeholder `BASE_URL` wherever the base path would go. The project owner replaces `BASE_URL` with the correct path when pasting your file in.

    The format for every internal link is:

    ```
    [Link text](BASE_URL/section-folder/page-filename)
    ```

    The pattern is: `BASE_URL` + `/` + the section folder name + `/` + the file name **without** `.mdx`.

    The section folder name and file name are determined by where the `.mdx` file is saved. Ask the person receiving your files what the exact folder path and filename will be if you are unsure.

    Example in a sentence:

    ```
    See the [App Blocker](BASE_URL/core-features/app-limits) page for a full explanation of all warning screen options.
    ```

    **Never write** `/blogs/...`, `https://...`, or any other concrete prefix. Always write `BASE_URL/...`.

    ---

    ## 17. Inline Fenced Code Blocks (No Title Needed)

    When you want a short code sample without a title label, use standard Markdown triple backticks:

    ````
    ```bash
    sha256sum curbox-v0.0.0.apk
    ```
    ````

    ````
    ```text
    pkg:com.google.android.youtube id:navigation_bar_item_icon_view action:back
    ```
    ````

    ---

    ## 18. Images

    Images must be placed in the `src/assets/` folder (or a subfolder such as `src/assets/docs/`) before being used in a page. Do not link to external image URLs — use local files only.

    ### Adding an image with standard Markdown

    Use standard Markdown syntax. The path is **relative** to the `.mdx` file that references it.

    ```
    ![Alt text describing the image](../../../assets/screenshot.png)
    ```

    The number of `../` segments depends on how deep the `.mdx` file sits. All doc pages currently live two levels deep (`docs/section/page.mdx`), so the path back to `src/assets/` is always `../../../assets/`.

    ### Adding an image with a caption

    Starlight does not have a built-in caption component. If you need a caption, add it as a plain paragraph in italics immediately below the image, with no blank line between them:

    ```
    ![The Focus Mode settings screen](../../../assets/focus-mode-settings.png)
    *The Focus Mode settings screen.*
    ```

    ### Alt text rules

    - Always write descriptive alt text. Describe what the image shows, not what it is (e.g. "The Reducers screen with YouTube highlighted" not "Screenshot").
    - If an image is purely decorative and conveys no information, use an empty alt attribute: `![](../../../assets/decoration.png)`.

    ### Naming your image files

    - Use lowercase letters, numbers, and hyphens only. No spaces or underscores.
    - Name files descriptively: `focus-mode-settings.png`, not `img1.png`.
    - Use `.png` for screenshots and diagrams. Use `.jpg` only for photographs.

    ### What to tell the project owner

    When handing off your file, list each image you used and confirm:
    1. The filename (e.g. `focus-mode-settings.png`).
    2. The subfolder inside `src/assets/` where it should be placed (e.g. `src/assets/docs/`).
    3. That you have included the image file alongside your `.mdx` file.

    ---

    ## 19. Blank Lines — The Most Common Mistake

    MDX is strict about blank lines around components. Missing blank lines will cause rendering errors or garbled output.

    **Always leave a blank line:**
    - Before and after `<Steps>`, `</Steps>`
    - Before and after `<Aside>`, `</Aside>`
    - Before and after `<Tabs>`, `</Tabs>`
    - Before and after `<Code ... />`
    - Between every paragraph
    - Between the import line and the first paragraph

    **Never leave a blank line:**
    - Between the `---` frontmatter close and the `import` line (leave exactly one blank line before the import, not after the `---`)

    The safe rule: when in doubt, add a blank line.

    ---

    ## 20. Writing Style

    These are the conventions used throughout the existing docs. Matching them keeps everything consistent.

    **Voice and tone**
    - Write in the second person: "you", "your", "tap", "open". Not "the user should…" or "one can…".
    - Be direct. Say "Tap **Save**." Not "You may want to tap Save when you are done."
    - Be friendly but not over-enthusiastic. No exclamation marks unless they appear on an actual UI button.

    **Tense**
    - Use present tense. "Curbox monitors the foreground app" not "Curbox will monitor the foreground app."

    **Describing UI actions**
    - On Android, use "tap" (not "click" or "press") for touchscreen actions.
    - Use "open" for launching an app or screen.
    - Use "toggle" for switches.
    - Use "enter" for typing values into a field.
    - Always bold the name of the UI element being interacted with: tap **Save**, open **Reducers**, toggle the **main switch**.

    **Technical accuracy**
    - Do not make up feature names. If you are unsure what something is called in the app, describe the behaviour and note that the exact label should be confirmed.
    - Package names follow Android convention: all lowercase, reverse domain notation (e.g., `com.google.android.youtube`).

    **Length**
    - Introductory paragraph: 2–4 sentences maximum.
    - Step descriptions: 1–3 sentences each. Do not write paragraphs inside a step.
    - Aside content: 1–2 sentences. If you need more, it belongs in the main body.

    ---

    ## 21. Complete Working Example

    Below is a complete, valid `.mdx` file you can use as a reference. It uses every available component at least once.

    ```mdx
    ---
    title: Example Feature
    description: A complete example showing every component and formatting option available
    sidebar:
    order: 9
    ---

    import { Steps, Aside, Tabs, TabItem, Code } from '@astrojs/starlight/components';


    Example Feature gives you control over something specific on your device. This introduction is two sentences: what the feature is, and why it matters.


    ## How It Works

    When you enable Example Feature, Curbox watches for a specific condition. The moment that condition is met, it takes the action you configured.

    <Aside type="note">
    Example Feature requires the Accessibility Service permission. Grant it from your device Settings before enabling this feature.
    </Aside>


    ## Supported Options

    You can configure Example Feature in three ways:

    | Option | What it does |
    |---|---|
    | **Option A** | Blocks immediately with no warning |
    | **Option B** | Shows a warning screen before blocking |
    | **Option C** | Logs the event without blocking |


    ## Setting It Up

    <Steps>
    1. **Navigate to Reducers**
    Open Curbox and tap **Reducers** in the bottom navigation bar.

    2. **Open Example Feature**
    Find the **Example Feature** card and tap it.

    3. **Enable the feature**
    Toggle the main switch at the top of the screen.

    4. **Choose your option**
    Select one of the three options from the list.

    5. **Add a custom rule** (optional)
    Tap **Add Rule** and enter your rule using the syntax shown below.

    6. **Save**
    Tap **Save**. The feature is now active.
    </Steps>

    <Aside type="tip">
    Start with Option B if you are new to this feature. It gives you a chance to reconsider before the block kicks in, which makes it easier to build awareness before committing to hard limits.
    </Aside>


    ## Rule Syntax

    Rules follow a `key:value` format with space-separated pairs.

    <Code
    code={`pkg:com.example.app id:some_element_id action:overlay`}
    lang="text"
    title="Minimal rule"
    />

    <Code
    code={`pkg:com.example.app
    id:some_element_id
    text:Subscribe
    action:back
    max:1`}
    lang="text"
    title="Full rule example"
    />


    ## Choosing the Right Session Length

    <Tabs>
    <TabItem label="Getting Started">
        Use a 5-minute limit to begin. The goal at this stage is awareness, not restriction. Seeing the notification appear is enough.
    </TabItem>
    <TabItem label="Building Habits">
        After a week, tighten the limit to match your actual goal. Check your Usage Stats to find a realistic target.
    </TabItem>
    <TabItem label="Strict Mode">
        Once habits are established, set the limit to zero and use Option A for an immediate, no-escape block.
    </TabItem>
    </Tabs>


    ## Combining With Other Features

    Example Feature works well alongside other Curbox tools. Use it for soft nudges and pair it with a hard blocker for the same apps when you want both layers of control.
    ```

    ---

    ## 22. Quick Checklist Before Handing Off Your File

    Go through this before submitting your doc:

    - [ ] File is saved as `.mdx` (not `.md`)
    - [ ] Frontmatter block at the very top, between `---` lines
    - [ ] `title`, `description`, and `sidebar.order` are all present
    - [ ] Import line lists exactly the components used in the file (no more, no less)
    - [ ] Blank line between the import line and the first paragraph
    - [ ] All `<Steps>`, `<Aside>`, `<Tabs>`, `<Code>` blocks have blank lines before and after them
    - [ ] All images use a relative path starting with `../../../assets/` and have descriptive alt text
    - [ ] Image files are named with lowercase letters and hyphens only, included alongside the `.mdx` file
    - [ ] All UI element names (button labels, screen names, tab names) are **bold**
    - [ ] All code values, package names, and placeholders are in `backticks`
    - [ ] Every internal link starts with `BASE_URL/` — no hardcoded domain, no hardcoded base path
    - [ ] No H1 heading (`#`) in the body — only `##` and `###`
    - [ ] Writing is in second person, present tense, with "tap" for touch actions
