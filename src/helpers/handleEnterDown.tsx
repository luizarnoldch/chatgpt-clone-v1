export const handleEnterKeyDown = (
  event: React.KeyboardEvent<HTMLTextAreaElement>,
) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    const form = event.currentTarget.form;
    if (form) {
      form.requestSubmit();
    }
  }
};
