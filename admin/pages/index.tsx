import * as React from "react";
import { TextField, MultiEditPage } from "@contember/admin";
import { MarkdownField } from "../components/MarkdownField";

export default () => (
  <MultiEditPage entities="Post">
    <TextField field="title" label={"Title"} />
    <MarkdownField field="content" label={"Content"} />
  </MultiEditPage>
);
