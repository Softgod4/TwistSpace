export const dragStartHandler = (e: React.DragEvent<HTMLDivElement>): void => {
  e.preventDefault();
};

export const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
  e.preventDefault();
};

// export const onDropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
//   e.preventDefault();
//   let files = [...e.dataTransfer.files];
//   console.log(
//     `name: ${files[0].name}\nsize: ${files[0].size}\ntype: ${files[0].type}`
//   );
//   let fileUrl = URL.createObjectURL(files[0]);
//   useUploadUrl().updateUrl(fileUrl);
//   console.log(useUploadUrl().StateUrl);
// };

// export const onFileChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
//   const files = e.target.files;
//   if (files && files.length > 0) {
//     console.log(
//       `name: ${files[0].name}\nsize: ${files[0].size}\ntype: ${files[0].type}\n`
//     );
//     let fileUrl = URL.createObjectURL(files[0]);
//     useUploadUrl().updateUrl(fileUrl);
//     console.log(useUploadUrl().StateUrl);
//   }
// };
