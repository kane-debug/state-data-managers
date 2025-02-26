export default function StateLayout({
  children,
  params: { code },
}: {
  children: React.ReactNode;
  params: { code: string };
}) {
  return <div>{children}</div>;
} 