// app/layout.tsx
export const metadata = {
  title: 'Project Time Tracker',
  description: 'Track projects and time efficiently',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
