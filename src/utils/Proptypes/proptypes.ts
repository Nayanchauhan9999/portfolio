export interface layoutProps{
    children: React.ReactNode;
}

export type pad = {
  top?: string | undefined;
  bottom?: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  vertical?: string | undefined;
  horizontal?: string | undefined;
  all?: string | undefined;
};


export type margin = {
  top?: string | undefined;
  bottom?: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  vertical?: string | undefined;
  horizontal?: string | undefined;
  all?: string | undefined;
};

export type ContactTypes = {
  company: string;
  email: string;
  fullName: string;
  id: string;
  message: string;
  mobile: string;
  submitedAt?: string;
};