
import { Announcement, Club } from './types';

export const ANNOUNCEMENTS: Announcement[] = [
  { id: '1', text: 'Admissions Open for Batch 2026-27. Apply now!', date: 'Oct 25', type: 'academic' },
  { id: '2', text: 'Annual Cultural Fest "Indira-Josh" dates announced: Dec 12-15.', date: 'Oct 24', type: 'event' },
  { id: '3', text: 'Hackathon Registration closes tonight at 11:59 PM.', date: 'Oct 23', type: 'alert' },
  { id: '4', text: 'Semester results for Final Year students are now live.', date: 'Oct 22', type: 'academic' },
  { id: '5', text: 'Guest Lecture by Industry Leader from Google this Friday.', date: 'Oct 21', type: 'event' },
  { id: '6', text: 'Library Timings extended for the upcoming examination week.', date: 'Oct 20', type: 'academic' },
];

export const CLUBS: Club[] = [
  { name: 'Tech Wizards', icon: 'fa-code', description: 'Coding & AI', color: 'bg-blue-600' },
  { name: 'Rhythms', icon: 'fa-music', description: 'Music & Arts', color: 'bg-purple-600' },
  { name: 'The Orators', icon: 'fa-microphone', description: 'Public Speaking', color: 'bg-rose-600' },
  { name: 'Eco Warriors', icon: 'fa-leaf', description: 'Sustainability', color: 'bg-emerald-600' },
  { name: 'Shutterbug', icon: 'fa-camera', description: 'Photography', color: 'bg-amber-600' },
  { name: 'Fin-Intel', icon: 'fa-chart-line', description: 'Finance & Stocks', color: 'bg-indigo-600' },
  { name: 'Indira Sports', icon: 'fa-volleyball', description: 'Athletics', color: 'bg-orange-600' },
  { name: 'Literary Club', icon: 'fa-book-open', description: 'Writing', color: 'bg-cyan-600' },
  { name: 'Social Wings', icon: 'fa-hand-holding-heart', description: 'NSS/CSR', color: 'bg-red-600' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/school/indira-university-pune/', color: 'bg-[#0077b5]' },
  { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/indira_university_pune/', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
  { name: 'Twitter', icon: 'fa-x-twitter', url: 'https://x.com/IndiraUni', color: 'bg-slate-800' },
  { name: 'YouTube', icon: 'fa-youtube', url: 'https://www.youtube.com/@IndiraUniversityPune', color: 'bg-[#ff0000]' },
  { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://www.facebook.com/IndiraUniversityPune/', color: 'bg-[#1877f2]' },
];
