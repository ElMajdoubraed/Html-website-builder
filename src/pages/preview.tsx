import { useEffect, useState } from "react";

interface ICode {
  html: string;
  css: string;
}

export default function Preview(): JSX.Element {
  // Set default values or empty strings if local storage items are not present
  const initialHtml = localStorage.getItem("gjs-html") ?? "";
  const initialCss = localStorage.getItem("gjs-css") ?? "";

  const [code, setCode] = useState<ICode>({
    html: "",
    css: "",
  });

  useEffect(() => {
    // Set document title
    document.title = "Preview";

    // Set initial values for html and css
    setCode({
      html: initialHtml,
      css: initialCss,
    });
  }, [initialHtml, initialCss]);

  return (
    <div>
      {/* Apply the CSS styles */}
      <style>{code.css}</style>

      {/* Render the HTML content */}
      <div dangerouslySetInnerHTML={{ __html: code.html }} />
    </div>
  );
}
