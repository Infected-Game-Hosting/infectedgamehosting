import type React from "react";
import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  type Block,
  type Inline,
} from "@contentful/rich-text-types";
import type { Asset, Entry } from "contentful";
import { memo } from "react";
import type { JSX } from "react/jsx-runtime";

interface ContentfulRichTextRendererProps {
  document: any;
  className?: string;
}

// Enhanced render options with dark theme styling
const createRenderOptions = (): Options => ({
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => (
      <h1 className="text-4xl font-bold mt-8 mb-6 text-white border-b border-[#39ff14]/30 pb-2">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mt-7 mb-5 text-white">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
      <h3 className="text-2xl font-semibold mt-6 mb-4 text-white">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => (
      <h4 className="text-xl font-semibold mt-5 mb-3 text-white">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => (
      <h5 className="text-lg font-semibold mt-4 mb-2 text-white">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => (
      <h6 className="text-base font-semibold mt-3 mb-2 text-white">
        {children}
      </h6>
    ),
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
      <p className="mb-4 text-[#c8cbd0] leading-relaxed">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-[#c8cbd0]">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#c8cbd0]">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-[#39ff14] bg-white/5 pl-6 py-4 mb-6 italic text-[#c8cbd0] rounded-r-lg">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#39ff14]/50 to-transparent my-8" />
    ),
    [BLOCKS.TABLE]: (node: Block | Inline, children: React.ReactNode) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-white/10 rounded-lg">
          {children}
        </table>
      </div>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (
      node: Block | Inline,
      children: React.ReactNode
    ) => (
      <th className="border border-white/10 bg-white/5 px-4 py-3 text-left font-semibold text-[#39ff14]">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_CELL]: (node: Block | Inline, children: React.ReactNode) => (
      <td className="border border-white/10 px-4 py-3 text-[#c8cbd0]">
        {children}
      </td>
    ),
    [BLOCKS.TABLE_ROW]: (node: Block | Inline, children: React.ReactNode) => (
      <tr className="hover:bg-white/5 transition-colors">{children}</tr>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
      const asset = node.data?.target as Asset;
      if (!asset?.fields) return null;

      const { file, title, description } = asset.fields;
      if (!file) return null;

      const fileUrl =
        typeof file === "string" ? file : (file as any)?.url || "";
      const contentType =
        typeof file === "object" ? (file as any)?.contentType || "" : "";

      const isImage = contentType.startsWith("image/");
      const isVideo = contentType.startsWith("video/");

      if (isImage) {
        return (
          <figure className="mb-6">
            <img
              src={fileUrl || "/placeholder.svg"}
              alt={String(description || title || "Embedded image")}
              className="w-full h-auto rounded-lg shadow-[0_0_20px_rgba(57,255,20,0.2)]"
              loading="lazy"
            />
            {(title || description) && (
              <figcaption className="mt-2 text-sm text-[#c8cbd0] text-center italic">
                {title && (
                  <span className="font-medium text-[#39ff14]">
                    {String(title)}
                  </span>
                )}
                {title && description && ": "}
                {description && String(description)}
              </figcaption>
            )}
          </figure>
        );
      }

      if (isVideo) {
        return (
          <figure className="mb-6">
            <video
              src={fileUrl}
              controls
              className="w-full rounded-lg shadow-[0_0_20px_rgba(57,255,20,0.2)]"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
            {(title || description) && (
              <figcaption className="mt-2 text-sm text-[#c8cbd0] text-center italic">
                {title && (
                  <span className="font-medium text-[#39ff14]">
                    {String(title)}
                  </span>
                )}
                {title && description && ": "}
                {description && String(description)}
              </figcaption>
            )}
          </figure>
        );
      }

      return (
        <div className="mb-6 p-4 border border-white/10 rounded-lg bg-white/5">
          <a
            href={fileUrl}
            download
            className="flex items-center gap-2 text-[#c8cbd0] hover:text-[#39ff14] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            {String(title || "Download file")}
          </a>
          {description && (
            <p className="mt-1 text-sm text-[#c8cbd0]">{String(description)}</p>
          )}
        </div>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
      const entry = node.data?.target as Entry<any>;
      if (!entry?.fields) return null;

      return (
        <div className="mb-6 p-6 border border-white/10 rounded-lg bg-white/5">
          <h4 className="text-lg font-semibold mb-2 text-[#39ff14]">
            {String(entry.fields.title || "Embedded Content")}
          </h4>
          {entry.fields.description && (
            <p className="text-[#c8cbd0]">{String(entry.fields.description)}</p>
          )}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => {
      const uri = node.data?.uri;
      return (
        <a
          href={uri}
          className="text-[#39ff14] hover:text-[#2ee80f] underline decoration-2 underline-offset-2 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (
      node: Block | Inline,
      children: React.ReactNode
    ) => {
      const entry = node.data?.target as Entry<any>;
      return (
        <a
          href={`/entries/${entry?.sys?.id}`}
          className="text-[#39ff14] hover:text-[#2ee80f] underline decoration-2 underline-offset-2 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-bold text-white">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode) => (
      <em className="italic text-[#c8cbd0]">{text}</em>
    ),
    [MARKS.UNDERLINE]: (text: React.ReactNode) => (
      <u className="underline decoration-2 underline-offset-2">{text}</u>
    ),
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-white/10 text-[#39ff14] rounded px-2 py-1 font-mono text-sm">
        {text}
      </code>
    ),
    [MARKS.SUBSCRIPT]: (text: React.ReactNode) => <sub>{text}</sub>,
    [MARKS.SUPERSCRIPT]: (text: React.ReactNode) => <sup>{text}</sup>,
  },
});

const isRichTextDocument = (content: any): boolean => {
  return (
    content &&
    typeof content === "object" &&
    content.nodeType &&
    content.data !== undefined &&
    content.content &&
    Array.isArray(content.content)
  );
};

const parseMarkdownToJSX = (markdown: string): React.ReactNode => {
  if (!markdown || typeof markdown !== "string") {
    return <div className="text-[#c8cbd0] italic">No content available</div>;
  }

  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let listItems: string[] = [];
  let isInList = false;
  let tableRows: string[] = [];
  let isInTable = false;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        elements.push(
          <p
            key={elements.length}
            className="mb-4 text-[#c8cbd0] leading-relaxed"
          >
            {parseInlineMarkdown(text)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul
          key={elements.length}
          className="list-disc pl-6 mb-6 space-y-2 text-[#c8cbd0]"
        >
          {listItems.map((item, index) => (
            <li key={index} className="mb-1 leading-relaxed">
              {parseInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );
      listItems = [];
      isInList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const [headerRow, ...bodyRows] = tableRows;
      elements.push(
        <div key={elements.length} className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-white/10 rounded-lg">
            {headerRow && (
              <thead>
                <tr className="hover:bg-white/5 transition-colors">
                  {headerRow
                    .split("|")
                    .filter((cell) => cell.trim())
                    .map((cell, index) => (
                      <th
                        key={index}
                        className="border border-white/10 bg-white/5 px-4 py-3 text-left font-semibold text-[#39ff14]"
                      >
                        {parseInlineMarkdown(cell.trim())}
                      </th>
                    ))}
                </tr>
              </thead>
            )}
            <tbody>
              {bodyRows
                .filter((row) => !row.includes("---"))
                .map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-white/5 transition-colors"
                  >
                    {row
                      .split("|")
                      .filter((cell) => cell.trim())
                      .map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-white/10 px-4 py-3 text-[#c8cbd0]"
                        >
                          {parseInlineMarkdown(cell.trim())}
                        </td>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      isInTable = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine.match(/^!\[.*?\]$$.*?$$$/)) {
      flushParagraph();
      flushList();
      flushTable();
      const match = trimmedLine.match(/^!\[(.*?)\]$$(.*?)$$$/);
      if (match) {
        const [, alt, src] = match;
        let imageSrc = src;
        if (src.startsWith("//")) {
          imageSrc = `https:${src}`;
        }
        elements.push(
          <figure key={elements.length} className="mb-6">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={alt || "Image"}
              className="w-full h-auto rounded-lg shadow-[0_0_20px_rgba(57,255,20,0.2)]"
              loading="lazy"
            />
            {alt && (
              <figcaption className="mt-2 text-sm text-[#c8cbd0] text-center italic">
                {alt}
              </figcaption>
            )}
          </figure>
        );
      }
      return;
    }

    if (trimmedLine.startsWith("#")) {
      flushParagraph();
      flushList();
      flushTable();
      const level = trimmedLine.match(/^#+/)?.[0].length || 1;
      const text = trimmedLine.replace(/^#+\s*/, "");

      const headerClasses = {
        1: "text-4xl font-bold mt-8 mb-6 text-white border-b border-[#39ff14]/30 pb-2",
        2: "text-3xl font-bold mt-7 mb-5 text-white",
        3: "text-2xl font-semibold mt-6 mb-4 text-white",
        4: "text-xl font-semibold mt-5 mb-3 text-white",
        5: "text-lg font-semibold mt-4 mb-2 text-white",
        6: "text-base font-semibold mt-3 mb-2 text-white",
      };

      const HeaderTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
      elements.push(
        <HeaderTag
          key={elements.length}
          className={
            headerClasses[level as keyof typeof headerClasses] ||
            headerClasses[6]
          }
        >
          {parseInlineMarkdown(text)}
        </HeaderTag>
      );
      return;
    }

    if (trimmedLine === "---" || trimmedLine === "***") {
      flushParagraph();
      flushList();
      flushTable();
      elements.push(
        <hr
          key={elements.length}
          className="border-0 h-px bg-gradient-to-r from-transparent via-[#39ff14]/50 to-transparent my-8"
        />
      );
      return;
    }

    if (trimmedLine.includes("|") && trimmedLine.split("|").length > 2) {
      flushParagraph();
      flushList();
      isInTable = true;
      tableRows.push(trimmedLine);
      return;
    } else if (isInTable) {
      flushTable();
    }

    if (trimmedLine.match(/^[*\-+]\s+/) || trimmedLine.match(/^\d+\.\s+/)) {
      flushParagraph();
      flushTable();
      isInList = true;
      const text = trimmedLine.replace(/^[*\-+\d+.]\s+/, "");
      listItems.push(text);
      return;
    } else if (isInList && trimmedLine === "") {
      return;
    } else if (isInList) {
      flushList();
    }

    if (trimmedLine === "") {
      flushParagraph();
      return;
    }

    currentParagraph.push(trimmedLine);
  });

  flushParagraph();
  flushList();
  flushTable();

  return <>{elements}</>;
};

const parseInlineMarkdown = (text: string): React.ReactNode => {
  if (!text) return text;

  text = text.replace(/\[([^\]]+)\]$$([^)]+)$$/g, (match, linkText, url) => {
    return `<a href="${url}" class="text-[#39ff14] hover:text-[#2ee80f] underline decoration-2 underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
  });

  text = text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="font-bold text-white">$1</strong>'
  );
  text = text.replace(
    /__(.*?)__/g,
    '<strong class="font-bold text-white">$1</strong>'
  );

  text = text.replace(
    /\*(.*?)\*/g,
    '<em class="italic text-[#c8cbd0]">$1</em>'
  );
  text = text.replace(/_(.*?)_/g, '<em class="italic text-[#c8cbd0]">$1</em>');

  text = text.replace(
    /`([^`]+)`/g,
    '<code class="bg-white/10 text-[#39ff14] rounded px-2 py-1 font-mono text-sm">$1</code>'
  );

  return <span dangerouslySetInnerHTML={{ __html: text }} />;
};

export const ContentfulRichTextRenderer = memo(
  function ContentfulRichTextRenderer({
    document,
    className = "",
  }: ContentfulRichTextRendererProps) {
    if (!document) {
      return <div className="text-[#c8cbd0] italic">No content available</div>;
    }

    try {
      if (isRichTextDocument(document)) {
        const renderOptions = createRenderOptions();
        return (
          <div className={`prose prose-lg max-w-none ${className}`}>
            {documentToReactComponents(document, renderOptions)}
          </div>
        );
      }

      if (typeof document === "string") {
        return (
          <div className={`prose prose-lg max-w-none ${className}`}>
            {parseMarkdownToJSX(document)}
          </div>
        );
      }

      return (
        <div className={`prose prose-lg max-w-none ${className}`}>
          <div className="text-[#c8cbd0] italic">
            Content format not supported
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error rendering content:", error);
      return (
        <div className={`prose prose-lg max-w-none ${className}`}>
          <div className="text-red-500 italic">
            Error rendering content. Please try again later.
          </div>
        </div>
      );
    }
  }
);
