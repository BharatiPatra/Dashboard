const InfoField = ({ label, value }) => (
  <div>
    <h3 className="text-sm font-medium text-muted-foreground mb-1">{label}</h3>
    <p>{value}</p>
  </div>
);

export default InfoField;
