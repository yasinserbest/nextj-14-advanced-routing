'use client'; //layout can also work client side

import { ProfileNav } from '@/components';
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProfileNav />
      <section>{children}</section>
    </>
  );
}
