export interface NewNoteValidationError {
  errors: {
    body?: string;
    title?: string;
  }
}