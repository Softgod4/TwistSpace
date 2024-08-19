import { ChangeEvent } from "react";

export const dragStartHandler = (e: React.DragEvent<HTMLDivElement>): void => {
  e.preventDefault();
};

export const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
  e.preventDefault();
};

export const onDropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
  e.preventDefault();
  let files = [...e.dataTransfer.files];
  console.log(
    `name: ${files[0].name}\nsize: ${files[0].size}\ntype: ${files[0].type}`
  );
  let formData = new FormData();
  formData.append("fileToUpload", files[0]);
  document.body.style.background = files[0];
};

export const onFileChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
  const files = e.target.files;
  if (files && files.length > 0) {
    console.log(
      `name: ${files[0].name}\nsize: ${files[0].size}\ntype: ${files[0].type}\npath:${files[0].mozFullpath}`
    );
  }
};
