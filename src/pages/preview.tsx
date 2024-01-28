import { useEffect, useState } from "react";

export default function Preview(): JSX.Element {
  const [html, setHtml] = useState<string>("");
  const [css, setCss] = useState<string>("");
  useEffect(() => {
    document.title = "Preview";
    setHtml(localStorage.getItem("gjs-html") || "");
    setCss(localStorage.getItem("gjs-css") || "");
  }, []);
  return (
    <div>
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
