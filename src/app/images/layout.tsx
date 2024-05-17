export default function ComplexDashboardLayout({
  children,
  animals, //slots are available as props so you don't have to import them manually
  furniture,
  plants,
}: {
  children: React.ReactNode;
  animals: React.ReactNode;
  furniture: React.ReactNode;
  plants: React.ReactNode;
}) {
  return (
    <div>
      <h1>{children}</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{animals}</div>
          <div>{furniture}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{plants}</div>
      </div>
    </div>
  );
}
