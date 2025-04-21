// email.interface.ts
export interface EmailTemplateState {
  html: string | null;
  loading: boolean;
  error: any;
}

export const initialState: EmailTemplateState = {
  html: null,
  loading: false,
  error: null,
};
