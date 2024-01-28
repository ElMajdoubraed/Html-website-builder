import { Modal } from "antd";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/vbscript-html";
import javaScript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/styles/default.css";

hljs.registerLanguage("html", html);
hljs.registerLanguage("javascript", javaScript);

export default function CodeModal(props: {
  open: boolean;
  setOpen: Function;
  code: string;
  setCode?: Function;
}): JSX.Element {
  const highlightedCode = props.code
    ? hljs.highlight(props.code, { language: "javascript" }).value
    : "";
  return (
    <Modal
      open={props.open}
      onOk={() => props.setOpen(false)}
      onCancel={() => props.setOpen(false)}
    >
      <code
        className="javascript"
        dangerouslySetInnerHTML={{
          __html: highlightedCode.split(">").join(">\n"),
        }}
      />
    </Modal>
  );
}
