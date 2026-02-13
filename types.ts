
export interface Announcement {
  id: string;
  text: string;
  date: string;
  type: 'academic' | 'event' | 'alert';
}

export interface Club {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export type AuthMode = 'login' | 'signup';
